import { Route, Routes } from 'react-router-dom'
import { ItemPage } from '../../pages/ItemPage/ItemPage'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage'
import { Layout } from '../Layout'
import { FormPage } from '../../pages/FormPage/FormPage'
import { EditProvider } from '../../store/editContext'
import { ListPage } from '../../pages/ListPage/ListPage'
import { SearchProvider } from '../../store/searchContext'

export const App = () => {
  return (
    <div>
      <SearchProvider>
        <Layout>
          <EditProvider>
            <Routes>
              <Route path="/" element={<ListPage />} />
              <Route path="list" element={<ListPage />} />
              <Route path="item/:id" element={<ItemPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </EditProvider>
        </Layout>
      </SearchProvider>
    </div>
  )
}
