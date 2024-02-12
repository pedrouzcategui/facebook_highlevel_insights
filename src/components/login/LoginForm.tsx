'use client'
import { useForm } from "react-hook-form"

type FormInputs = {
    email: string,
    password: string,
}

export default function LoginForm() {

    const { register, handleSubmit: validateFields } = useForm<FormInputs>()

    const handleSubmit = (formData: FormInputs) => {
        console.log(formData);
    }

    return (
        <form onSubmit={validateFields(handleSubmit)}>
            <div className="flex flex-col w-[200px]">
                <input className="border-black border-2 mb-2" type="email" {...register("email")} />
                <input className="border-black border-2 mb-2" type="password" {...register("password")} />
                <button className="bg-slate-800 text-white" type="submit">Submit Information</button>
                <hr />
            </div>
        </form>
    )
}
