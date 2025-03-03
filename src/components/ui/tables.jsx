"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, getDocs,updateDoc,doc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"




export function Tables() {
  const [data, setData] = useState([]);
  const [StateId, SetStateID] = useState("");
	console.log("TCL: Tables -> StateId", StateId)
  console.log("TCL: data", data);
  async function handleData() {
    const querySnapshot = await getDocs(collection(db, "auth"));
    var arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    setData(arr);
  }

  useEffect(() => {
    handleData();
  }, []);
  async function checkStatus(StateId) {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Do you want to approve?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Approve",
      });
  
      // If confirmed, update the Firestore document
      if (result.isConfirmed && StateId) {
        const docRef = doc(db, "auth", StateId); 
        await updateDoc(docRef, {
          status: true, 
        });
  
        Swal.fire("Approved!", "User request approved", "success"); // Show success message
      }
    } catch (error) {
      console.error("Error updating document:", error); // Handle errors
      Swal.fire("Error", "There was an issue approving the request", "error");
    }
  }

  

  return (
    <>
      <div className="m-2 ">
        <p className="font-bold text-2xl">Projects</p>
        <p className="text-xs">
          done this month <span className="text-green-400">40%</span>
        </p>
      </div>
      <Table>
        <TableCaption>Projects</TableCaption>
        <TableCaption>done this month 40%</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>CNIC</TableHead>
            <TableHead> Name</TableHead>
            <TableHead>Catagory</TableHead>
            <TableHead className="text-right">Request</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice, idx) => (
            <TableRow key={idx} onClick={()=>{
              // SetStateID(invoice.id)
              checkStatus(invoice.id)

            } 
            }>
              <TableCell className="font-medium">{invoice.cnic}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell className="pl-14 xl:pl-0 uppercase">
                {invoice.parsedData?.subCategory || "N/A"}{" "}
                {/* Ensure parsedData exists */}
              </TableCell>
              <TableCell className="text-right">
                {invoice.parsedData?.amount || "N/A"}{" "}
              </TableCell>
              <TableCell className="text-right">
                {invoice?.status === false ? "pending" : "approved"}
              </TableCell>
             
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

      {/* {
        StateId? swal.fire{{

          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }}.then((result) => {
          if (result.isConfirmed) {
            checkStatus();
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        }}:
        null
      } */}
    </>
  );
}
