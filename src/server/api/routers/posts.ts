import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const postsRouter = createTRPCRouter({
    getAll:protectedProcedure
    .query(({ctx})=>{
        return ctx.prisma.post.findMany(
            where:{
                id: "0"
            }
        )
    })
})