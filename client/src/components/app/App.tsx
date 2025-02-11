import { Route, Routes } from 'react-router-dom'
import { ItemPage } from '../../pages/ItemPage/ItemPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage'
import { Layout } from '../Layout'
import { FormPage } from '../../pages/FormPage/FormPage'
import { EditProvider } from '../../store/context'
import { ListPage } from '../../pages/ListPage/ListPage'

export const App = () => {
  return (
    <div>
      <Layout>
        <EditProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="list" element={<ListPage />} />
            <Route path="item/:id" element={<ItemPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </EditProvider>
      </Layout>
    </div>
  )
}
