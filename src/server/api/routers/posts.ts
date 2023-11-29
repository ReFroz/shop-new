import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";



export const postsRouter = createTRPCRouter({
    
    getAll:publicProcedure
    .query(({ctx})=>{
        return ctx.db.post.findMany({
            select:{
                id:true,
                title:true,
                price:true,
                imgs:{
                    select:{
                        altTitle:true,
                    }
                },
                brands:{
                    select:{
                        title:true,
                        img:true,
                    }
                }
            },
            take:8

        })
    }),

    getCategory:publicProcedure
    .query(({ctx})=>{
        return ctx.db.category.findMany(
           {select:{
            id:true,
            title:true,
            img:true
           }}
        )
    }),
    getFilterPosts:publicProcedure
    .input(z.object({
        selectedItem: z.string(),
    }))
    .query(({ctx,input})=>{
        return ctx.db.post.findMany({
            select:{
                popularity:true,
                id:true,
                title:true,
                price:true,
                imgs:{
                    select:{
                        altTitle:true,
                    }
                },
                brands:{
                    select:{
                        title:true,
                        img:true
                    }
                },
                categories:{
                    select:{
                        title:true,
                    }
                }
            },
            where:{
                AND:[
                    {
                        categories:{
                            some:{
                                title:input.selectedItem
                            }
                        }
                    }
                ]
            },
            
            
        })
    })
})