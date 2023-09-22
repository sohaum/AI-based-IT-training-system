import React from 'react'
import { useRouter } from 'next/router'
// import { GetStaticProps, GetStaticPaths } from 'next'
// import { Course } from '../../interfaces'
// import { sampleCourseData } from '../../utils/sample-data'
// import Layout from '../../components/Layout'
// import ListDetail from '../../components/ListDetail'
// import { getCourse } from '../../utils/api'
// interface Props {
//     item?: Course
//     errors?: string
// }
// const StaticPropsDetail = ({ item, errors }: Props) => {
//     const router = useRouter()
//     if (router.isFallback) {
//         return <Layout title="Loading...">Loading...</Layout>
//     }
//     if (errors) {
//         return (
//             <Layout title="Error | Next.js + TypeScript Example">
//                 <p>
//                     <span style={{ color: 'red' }}>Error:</span> {errors}
//                 </p>
//             </Layout>
//         )
//     }
//     return (
//         <Layout
//             title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}
//         >
//             {item && <ListDetail item={item} />}
//         </Layout>
//     )
// }