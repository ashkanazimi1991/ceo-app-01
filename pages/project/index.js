import Layout from '../../components/Adviser/Layout'
import React from 'react'
import ScrollItem from '../../components/ScrollItems/ScrollItem'
import axios from 'axios'
import { MainLink } from '../../components/BaseUrl/BaseUrl'

const index = ({projects}) => {
    return(
        <Layout>
            <ScrollItem projects={projects} />
        </Layout>
    )
}

export async function getServerSideProps({ req, res, query }) {
    const projects =  await axios.get(encodeURI(`${MainLink}/projects/`));
  
    const projectsResponse = projects.data

    return {
      props: { projects: projectsResponse }
    }
  }

export default index;