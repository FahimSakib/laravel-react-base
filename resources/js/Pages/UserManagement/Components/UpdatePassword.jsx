import InputError from "@/Components/Form/InputError"
import TextInput from "@/Components/Form/TextInput"
import { useForm } from "@inertiajs/react"

export default function UpdatePassword({ }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: ''
    })

    return (
        <form className="space-y-5">
            <div>
                <TextInput
                    label="Current Password"
                    id="current_password"
                    name="current_password"
                    type="password"
                    value={data.current_password}
                    onChange={(e) => setData('current_password', e.target.value)}
                />
                <InputError message={errors.current_password} className="mt-2 ml-2" />
            </div>
            <div>
                <TextInput
                    label="New Password"
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                />
                <InputError message={errors.password} className="mt-2 ml-2" />
            </div>
            <div>
                <TextInput
                    label="Confirm New Password"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                />
                <InputError message={errors.password_confirmation} className="mt-2 ml-2" />
            </div>
            <div className="flex justify-end">
                <button
                    className={
                        'flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] hover:bg-[#4338ca] '
                        + (processing ? 'opacity-75 ' : '')
                    }
                    type="submit"
                    disabled={processing}
                >
                    {processing && <Spiner width="4" height="4" className="mr-2" />}
                    Update Password
                </button>
            </div>
        </form>
    )
}