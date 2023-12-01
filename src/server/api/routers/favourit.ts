import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { contextProps } from "@trpc/react-query/shared";

export const favouriitRouter = createTRPCRouter({
    getLike:publicProcedure
    .query(({ctx})=>{
        return ctx.db.favourit.findMany(
            {
                select:{
                    postsID:true,
                    posts:{select:{
                        id:true,
                        title:true,
                        price:true,
                        imgs:{
                            select:{
                                altTitle:true,
                                title:true
                            },
                        },
                        property:true,                     
                    },
                },
                
            },
            where:{
                user:{id:Number(ctx.session?.user.id)}
            }
        }
        )
    }
    )})