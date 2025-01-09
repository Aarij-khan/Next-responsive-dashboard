"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BiDollar, BiRightArrowAlt, BiSearch, BiSolidDashboard } from 'react-icons/bi'
import { IoPersonCircle, IoSettings } from "react-icons/io5";
import { FaBars, FaBell } from "react-icons/fa";
import Link from "next/link";
import { HiUsers } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { RiArrowRightWideFill } from "react-icons/ri";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Bar, BarChart, Tooltip, ResponsiveContainer } from "recharts"
import '@/app/styles/globals.css';
import { RxCross2 } from "react-icons/rx";



import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Tables } from '@/components/ui/tables';
import Button from '@/components/Button';



function page() {
    const [toggle, setToggle] = useState(false)
    const pathname = usePathname()
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartDatas = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    }

    const chartConfigs = {
        desktop: {
            label: "Desktop",
            color: "white",
        },
        mobile: {
            label: "Mobile",
            color: "lightgray",
        },
    }
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    return (
        <>
            {
                toggle ?
                    (
                        <div
                            className={`bg-blue-700 shadow_pri lg:hidden ${toggle === false ? "w-[0%]" : "max-[321px]:w-[14rem] w-[16.5rem] absolute top-0 left-0"}  lg:w-[20%] xl:w-[18%] min-[1450px]:w-[14%] h-full lg:relative overflow-y-auto transition-all duration-300 z-50`}>
                            <div
                                className={`border-2 border-white w-full max-[321px]:h-[5rem]  flex justify-center items-center ${toggle === false ? "opacity-0" : "opacity-100"
                                    } lg:opacity-100`}
                            >

                                <div className='flex flex-col  gap-4 py-10 mt-4 pl-6 bg-gray-200 '>
                                    <div className='flex items-center justify-between w-full px-2'>
                                        <h1 className='font-bold text-3xl'>LOGO</h1>
                                        <RxCross2 className='text-3xl' color='blue' onClick={() => setToggle(false)} />
                                    </div>

                                    <Link href={'/dashboard'}>

                                        <div className={`w-[80%]  flex gap-3 items-center rounded-lg p-2 ${pathname == "/dashboard" ? "bg-white" : ''}  `}>
                                            <div className={`p-2 rounded-lg ${pathname === "/dashboard" ? ""  : ""} `}>
                                                <BiSolidDashboard className=' text-black text-2xl ' color={`${pathname == "/dashboard" ? "white" : 'black'}`} />
                                            </div>
                                            <div>
                                                <h1>Home</h1>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={'/table'}>
                                        <div className={`w-[80%] flex gap-3 items-center  rounded-lg p-2  ${pathname == "/table" ? "bg-white" : ''} `}>
                                            <div className={`p-2 rounded-lg ${pathname == "/table" ? " "  : ""}`}>
                                                <BiSolidDashboard className=' text-black  text-2xl' color={`${pathname == "/table" ? "white" : 'black'}`} />
                                            </div>
                                            <div>
                                                <h1>Table</h1>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={'/billing'}>
                                        <div className={`w-[80%] flex gap-3 items-center  rounded-lg p-2  ${pathname == "/billing" ? "bg-white" : ''} `}>
                                            <div className={`p-2 rounded-lg ${pathname == "/billing" ? " "  : ""}`}>
                                                <BiSolidDashboard className=' text-black  text-2xl' color={`${pathname == "/billing" ? "white" : 'black'}`} />
                                            </div>
                                            <div>
                                                <h1>billing</h1>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={'/rtf'}>
                                        <div className={`w-[80%] flex gap-3 items-center  rounded-lg p-2  ${pathname == "/rtf" ? "bg-white" : ''} `}>
                                            <div className={`p-2 rounded-lg ${pathname == "/rtf" ? " "  : ""}`}>
                                                <BiSolidDashboard className=' text-black  text-2xl' color={`${pathname == "/rtf" ? "white" : 'black'}`} />
                                            </div>
                                            <div>
                                                <h1>RTF</h1>
                                            </div>
                                        </div>
                                    </Link>



                                    <h1>Account pages</h1>
                                    <div className='flex flex-col gap-3'>


                                        <div className='w-[80%] flex gap-3 items-center  rounded-lg p-2 '>
                                            <div className='bg-white  p-2 rounded-lg'>
                                                <BiSolidDashboard className=' text-black  text-2xl' color='black' />
                                            </div>
                                            <div>
                                                <h1>RTL</h1>
                                            </div>
                                        </div>
                                        <div className='w-[80%] flex gap-3 items-center  rounded-lg p-2  '>
                                            <div className='bg-white  p-2 rounded-lg'>
                                                <BiSolidDashboard className=' text-black  text-2xl' color='black' />
                                            </div>
                                            <div>
                                                <h1>RTL</h1>
                                            </div>
                                        </div>
                                        <div className='w-[80%] flex gap-3 items-center  rounded-lg p-2  '>
                                            <div className='bg-white  p-2 rounded-lg'>
                                                <BiSolidDashboard className=' text-black  text-2xl' color='black' />
                                            </div>
                                            <div>
                                                <h1>RTL</h1>
                                            </div>
                                        </div>
                                        <div className="w-[80%] h-[190px] flex flex-col justify-center p-4 gap-1 bg-gradient-to-l from-blue-400 to-blue-500 rounded-xl shadow-lg">
                                            <div className="p-1 bg-white w-fit rounded-lg">
                                                <BiSolidDashboard className=' text-white text-2xl' color='black' />
                                            </div>
                                            <div>
                                                <h1 className=' text-white'>Need Help?</h1>
                                                <h1 className=' text-white'>Please check our docs</h1>

                                            </div>
                                            <Button
                                                name={'DOCUMENTATION'}
                                                className={' rounded-lg'}
                                                bgcolor={"bg-blue-600 text-white text-xs"}
                                            />
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    ) :
                    null
            }
            <div className='w-full  bg-gray-200 p-6 '>
                <div className='w-full flex sm:justify-between sm:pb-10 pb-4  px-7 flex-col sm:flex-row'>
                    <div>
                        <h2 className='flex items-center gap-2'>Pages <BiRightArrowAlt />  {pathname.split('/')[1]}</h2>
                        <h1 className='font-bold'>{pathname.split('/')[1]}</h1>
                    </div>
                    <div className='flex gap-4 items-center  mt-2 sm:mt-0'>
                        <div className='h-[6vh] w-[400px]  sm:h-[4vh] sm:w-full flex bg-white items-center px-2 gap-1 rounded-lg'>
                            <BiSearch />
                            <input type="text" placeholder='Type here' className='outline-none' />
                        </div>
                        <div className='gap-2 items-center hidden sm:flex sm:w-[150px]'>
                            <IoPersonCircle className='text-xl' />
                            <p>Sign in</p>
                        </div>
                        <div className='gap-2 items-center hidden sm:flex'>
                            <IoSettings className='text-xl' />
                        </div>
                        <div className='gap-2 items-center hidden sm:flex'>
                            <FaBell className='text-xl' />
                        </div>
                        <div className='gap-2 items-center  sm:hidden'>
                            {
                                toggle ? (
                                    <RxCross2 className='text-3xl' color='blue' onClick={() => setToggle(false)} />

                                ) :
                                    (
                                        <FaBars className='text-3xl' color='blue' onClick={() => setToggle(true)} />
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className='flex w-full items-center sm:justify-evenly h-[50vh]   md:h-[22vh] pb-10 2xl:pb-0 flex-col sm:flex-row gap-4 sm:flex-wrap'>
                    <div className=' mt-4 w-[270px] sm:mt-0 sm:w-[300px] md:w-[40%] xl:w-[20%]  2xl:w-[20%]   rounded-xl bg-white flex p-2 items-center justify-between'>
                        <div>
                            <p className='text-md text-gray-400'>Total Sales</p>
                            <p className='font-bold text-3xl'>$00,0000</p>
                        </div>
                        <div className='p-3 rounded-xl ' style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }} >
                            <BiDollar color='white' size={25} />
                        </div>
                    </div>
                    <div className=' mt-2 w-[270px] sm:mt-0 sm:w-[300px] md:w-[40%] xl:w-[20%] 2xl:w-[25%] rounded-xl bg-white flex p-2 items-center justify-between'>
                        <div>
                            <p className='text-md text-gray-400'>Total Users</p>
                            <p className='font-bold text-3xl'>+3,200</p>
                        </div>
                        <div className='p-3 rounded-xl ' style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }} >
                            <HiUsers color='white' size={25} />
                        </div>
                    </div>
                    <div className=' mt-2 w-[270px] sm:mt-0 sm:w-[300px] md:w-[40%] xl:w-[20%] 2xl:w-[25%] rounded-xl bg-white flex p-2 items-center justify-between'>
                        <div>
                            <p className='text-md text-gray-400'>New Clients</p>
                            <p className='font-bold text-3xl'>+1,200</p>
                        </div>
                        <div className='p-3 rounded-xl ' style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                            <FaHeart color='white' size={25} />
                        </div>
                    </div>
                    <div className=' mt-2 w-[270px] sm:mt-0 sm:w-[300px] md:w-[40%] xl:w-[20%] 2xl:w-[25%] rounded-xl bg-white flex p-2 items-center justify-between'>
                        <div>
                            <p className='text-md text-gray-400'>New Orders</p>
                            <p className='font-bold text-3xl'>$13,200</p>
                        </div>
                        <div className='p-3 rounded-xl ' style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                            <FaBagShopping color='white' size={25} />
                        </div>
                    </div>
                </div>

                <div className=' w-full h-full sm:flex sm:flex-row gap-12 sm:gap-6 justify-center items-center flex-col mt-4 2xl:mt-0 lg:gap-4 md:gap-5'>
                    <div className='sm:w-[49%] sm:h-[50vh] md:h-[54vh] lg:h-[57vh]  xl:h-[62vh] 2xl:h-[69vh] w-fit  rounded-2xl' >
                        <Card style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                            <CardHeader>
                                <CardTitle className='text-white'>Month Progress</CardTitle>
                                <CardDescription className='text-white'>January - June 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfigs} className='text-white'>
                                    <BarChart accessibilityLayer data={chartDatas} >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="dashed" />}
                                        />
                                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                            <div className="flex-col  gap-2 sm:gap-0 text-sm p-4 text-white">
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Active Users</p>
                                    <p className='text-green-400'>than last week +30%</p>
                                </div>
                                <p className='text-white text-center'>We have created multiple options for you to put together and customise into pixel perfect pages.</p>
                                <div className='flex justify-evenly w-full '>
                                    <div className='flex flex-col '>
                                        <p className='font-bold text-lg'>3,6K</p>
                                        <p>Users</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-lg'>2m</p>
                                        <p>Clicks</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-lg'>$772</p>
                                        <p>Sales</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-lg'>82</p>
                                        <p>Items</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='py-4 sm:w-[49%] sm:h-[50vh] md:h-[54vh] lg:h-[57vh] rounded-2xl xl:h-[62vh] 2xl:h-[69vh] mt-4 sm:mt-0  flex justify-center items-center' style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                        <div className='h-[90%] w-[90%]'>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}  >
                                    <Line type="monotone" dataKey="uv" stroke="#ffffff" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* <Card className='bg-gradient-to-l from-blue-800 to-blue-500 sm:w-[49%] sm:h-[50vh] md:h-[54vh] lg:h-[57vh] xl:h-[62vh] 2xl:h-[69vh] mt-4 sm:mt-0'>
                        <CardHeader>
                            <CardTitle className='text-white'>Active Users</CardTitle>
                            <CardDescription className='text-white'>than last week +30%</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <LineChart
                                    accessibilityLayer
                                    data={chartData}
                                    margin={{
                                        left: 12,
                                        right: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                    <Line
                                        dataKey="desktop"
                                        type="monotone"
                                        stroke="var(--color-desktop)"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    <Line
                                        dataKey="mobile"
                                        type="monotone"
                                        stroke="var(--color-mobile)"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </CardContent>

                    </Card> */}

                </div>
                <div className='mt-10 sm:flex sm:flex-row gap-4 w-full flex-col'>
                    <div className='sm:w-[50%] h-fit  w-full p-2  sm:p-4 bg-white rounded-xl  '>
                        <Tables />
                    </div>
                    <div className='sm:w-[50%] w-full   bg-white flex flex-col gap-3 p-4 rounded-xl mt-4 sm:mt-0 '>
                        <div>
                            <h1 className='font-bold'>Orders History</h1>
                            <p className='text-sm'>this month <span className='text-green-700'>20%</span></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2 border-green-400'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>$2,400 - Redesign store</p>
                                    <p className='text-sm'>09 JUN 7:20 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2 border-green-400'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>New order #3654323</p>
                                    <p className='text-sm'>08 JUN 12:20 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2  border-blue-600'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>Company server payments</p>
                                    <p className='text-sm'>04 JUN 3:10 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2  border-blue-600'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>New card added for order #4826321</p>
                                    <p className='text-sm'>02 JUN 2:45 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2 border-blue-600'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>Unlock folders for development</p>
                                    <p className='text-sm'>18 MAY 1:30 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col pt-1'>
                                    <div className='h-4 w-4 rounded-full border-2 border-gray-400'></div>
                                    <div className='h-10 w-[0.1px] border-l-2 border-gray-300 ml-[6px] mt-[-2px]'></div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>
                                        New order #46282344</p>
                                    <p className='text-sm'>14 MAY 3:30 PM</p>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <div className='flex flex-col pt-1'>
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                </div>
                                <div >
                                    <p className='text-sm'>Recording...</p>
                                </div>
                            </div>
                            <Button
                                name={'REVERSE'}
                                className={' rounded-lg'}
                                bgcolor={"text-white text-xs"}
                                style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[30vh]  mt-3 sm:flex sm:flex-row sm:justify-center gap-6 flex-col '>
                    <div className='sm:w-[60%] w-full bg-white shadow-xl flex justify-center flex-col  gap-2 px-6 h-[30vh] rounded-xl'>
                        <p>Built by developers</p>
                        <p className='text-2xl'>Muse Dashboard for Ant Design</p>
                        <p className='text-xs text-center sm:text-start'>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                        <div className='flex items-center'>
                            <p className='text-blue-900'>Read More</p>
                            <RiArrowRightWideFill className='text-blue-900' />
                        </div>
                    </div>
                    <div className='sm:w-[39%] w-full bg-white rounded-xl shadow-xl p-4 flex justify-center flex-col  gap-2 px-6 h-[30vh] mt-4 sm:mt-0 '>
                        <div className=' bg-white rounded-xl shadow-xl  flex justify-center flex-col  gap-3 px-6 h-[30vh] '  style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                            <p className='text-xs sm:text-3xl text-white font-bold'>Work with the best</p>
                            <p className='text-xs text-white'>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                            <div className='flex items-center'>
                                <p className='text-blue-300'>Read More</p>
                                <RiArrowRightWideFill className='text-blue-300' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default page