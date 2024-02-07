import ArrowSmallRight from '@/Components/Icons/ArrowSmallRight'
import Layout from '@/Shared/Layout'
import { usePage } from '@inertiajs/react'
import React from 'react'

const Index = () => {
    const { auth } = usePage().props

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <h4 className="text-2xl md:text-3xl font-bold">Dashboard</h4>
            <div className="flex flex-col md:flex-row mt-8 gap-6">
                <div className="flex flex-col-reverse md:flex-row justify-between w-full md:w-2/3 rounded-2xl px-8 py-4 bg-[#f5f7ff] dark:bg-[#312e81]">
                    <div className="my-auto">
                        <h5 className="text-2xl font-bold leading-relaxed capitalize">
                            Welcome back <span className="">&#128075;</span> <br />
                            {auth?.user?.name}
                        </h5>
                        <p className="text-sm font-semibold mt-4">What are you managing today?</p>
                        <button className="mt-8 px-5 py-2 text-white font-semibold rounded-xl bg-[#6366f1]">Demo Button</button>
                    </div>
                    <div className="w-48 self-center">
                        <img src="/assets/images/person-standing.png" alt="dashboard-welcome-png" className="w-48" />
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-8 rounded-2xl shadow dark:bg-[#111927]">
                    <h5 className="text-xl font-bold">
                        Feature List
                    </h5>
                    <ul className="mt-4 space-y-1 text-[#6c737f] dark:text-[#a0aec0]">
                        <li className="flex items-center">
                            <svg
                                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Responsive
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Dark Mode
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            User Management
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Permissions
                        </li>
                    </ul>

                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-6">
                <div className="rounded-2xl shadow dark:bg-[#111927] w-full md:w-1/3 divide-y dark:divide-[#2F3746]">
                    <div className="flex gap-6 items-center px-8 py-6">
                        <div>
                            <img src="/assets/images/iconly-glass-tick.svg" alt="iconly-glass-tick" className="w-12" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#6c737f] dark:text-[#a0aec0]">Done Task</p>
                            <h5 className="text-3xl font-bold">31</h5>
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="flex items-center px-3 py-2 gap-1 text-sm font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5">
                            See all tasks
                            <ArrowSmallRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="rounded-2xl shadow dark:bg-[#111927] w-full md:w-1/3 divide-y dark:divide-[#2F3746]">
                    <div className="flex gap-6 items-center px-8 py-6">
                        <div>
                            <img src="/assets/images/iconly-glass-info.svg" alt="iconly-glass-info" className="w-12" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#6c737f] dark:text-[#a0aec0]">Pending Issues</p>
                            <h5 className="text-3xl font-bold">13</h5>
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="flex items-center px-3 py-2 gap-1 text-sm font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5">
                            See all issues
                            <ArrowSmallRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="rounded-2xl shadow dark:bg-[#111927] w-full md:w-1/3 divide-y dark:divide-[#2F3746]">
                    <div className="flex gap-6 items-center px-8 py-6">
                        <div>
                            <img src="/assets/images/iconly-glass-paper.svg" alt="iconly-glass-paper" className="w-12" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#6c737f] dark:text-[#a0aec0]">Open Tickets</p>
                            <h5 className="text-3xl font-bold">3</h5>
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="flex items-center px-3 py-2 gap-1 text-sm font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5">
                            See all tickets
                            <ArrowSmallRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.layout = page => <Layout children={page} title="Dashboard" />
export default Index