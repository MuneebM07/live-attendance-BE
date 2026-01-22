import *  as z  from 'zod';

export const classSchema = z.object({
    classNamel: z.string().min(1, "Class name should be atleast 1 character")
});
