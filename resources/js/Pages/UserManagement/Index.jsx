import Layout from '@/Shared/Layout'
import React from 'react'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <h4 className="text-2xl md:text-3xl font-bold">Users</h4>
        </div>
    )
}

Index.layout = page => <Layout children={page} title="User List" />
export default Index