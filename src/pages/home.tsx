import Footer from "@/components/footer"
import GridCard from "@/components/gridCard"
import Introduction from "@/components/introduction"
import Table from "@/components/projectList"
import Navbar from "@/components/navbar"

function Home() {

    return (
        <>
            <div className='bg-dark'>
                <Navbar />
                <Introduction />
                <GridCard />
                <Table />
                <Footer />
            </div>
        </>
    )
}

export default Home