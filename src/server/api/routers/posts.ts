import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postsRouter = createTRPCRouter({
    getAll:publicProcedure
    .query(({ctx})=>{
        return ctx.db.post.findMany({take:5})
    }),
    getAllImg:publicProcedure
    .query(({ctx})=>{
        return ctx.db.image.findMany()
    })
})