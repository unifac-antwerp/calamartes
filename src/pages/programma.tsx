import { HeaderSmall, Layout } from '@components'
import * as React from 'react'
import Helmet from 'react-helmet'

const Programma = () => (
  <Layout>
    <Helmet title="Programma" />
    <HeaderSmall
      title="Title"
      subtitle="Subtitle"
      picture="https://images.vrt.be/dako2017_1600s_j75/2018/03/15/7957bcc6-285e-11e8-abcc-02b7b76bf47f.jpg"
    />
    <h1>Programma</h1>
  </Layout>
)

export default Programma
