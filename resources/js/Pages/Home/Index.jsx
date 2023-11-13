import Layout from '@/Shared/Layout'
import { usePage } from '@inertiajs/react'
import React from 'react'

const Index = () => {
    const { data } = usePage().props

    return (
        <div className="">
            {data ? data : ''}
        </div>
    )
}

Index.layout = page => <Layout children={page} title="Home" />
export default Index