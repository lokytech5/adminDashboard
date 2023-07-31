import MainLayout from "@/components/shared/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Dashboard!</h1>
      <Link href="/orders">
        Go to Orders
      </Link>
    </>
  )
}
