import Head from 'next/head'
import { WithSpring } from 'shared/lib/components'
import { SalesmanForm } from 'widgets/Login'

const SalesmanPage = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Sign up as salesman</title>
    </Head>
    <SalesmanForm/>
  </WithSpring>
}

export default SalesmanPage
