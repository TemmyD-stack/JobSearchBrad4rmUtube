import Card from './Card'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const HomeCards = () => {
  return (
   <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 5 }}
            className="cursor-pointer"

          
          >
            <Card>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
            </p>
            <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                Browse Jobs
            </Link>
          </Card>
          </motion.div>
          
          <motion.div 
            
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="cursor-pointer"
          >
            <Card bg='bg-indigo-100'>
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Add Job
              </Link>
            </Card>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}

export default HomeCards