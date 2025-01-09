import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Paid",
      totalAmount: "00",
      paymentMethod: "Credit Card",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Pending",
      totalAmount: "00",
      paymentMethod: "PayPal",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Unpaid",
      totalAmount: "00",
      paymentMethod: "Bank Transfer",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Paid",
      totalAmount: "00",
      paymentMethod: "Credit Card",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Paid",
      totalAmount: "00",
      paymentMethod: "PayPal",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Pending",
      totalAmount: "00",
      paymentMethod: "Bank Transfer",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Unpaid",
      totalAmount: "00",
      paymentMethod: "Credit Card",
    },
    {
      company: " Soft UI Shopify Version",
      paymentStatus: "Unpaid",
      totalAmount: "00",
      paymentMethod: "Credit Card",
    },
   
  ]
  
  export function Tables() {
    return (
      <>
        <div className="m-2 ">
          <p className="font-bold text-2xl">Projects</p>
          <p className="text-xs">done this month <span className="text-green-400">40%</span></p>
        </div>
      <Table>
        <TableCaption>Projects</TableCaption>
        <TableCaption>done this month 40%</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >COMPANIES</TableHead>
            <TableHead>	MEMBERS</TableHead>
            <TableHead>COMPETITION</TableHead>
            <TableHead className="text-right">BUDGET</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice,idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{invoice.company.slice(0,16)+"..."}</TableCell>
              <TableCell>
                <div className="flex">
                    <img src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" alt="image"  className="h-7 w-7 rounded-full"/>
                    <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="image"  className="h-7 w-7 rounded-full object-cover"/>
                    <img src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" alt="image"  className="h-7 w-7 rounded-full"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxzM_e4qVtnPZttfPhbjcPssC78WndotRPg&s" alt="image"  className="h-7 w-7 rounded-full"/>
                </div>
              </TableCell>
              <TableCell className="pl-14 xl:pl-0">
                <div className="flex flex-col gap-1">
                  <p>60%</p>
                  <div className="w-[30%] h-1 border-2 border-green-800"></div>
                </div>
              </TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$11</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </>

    )
  }
  