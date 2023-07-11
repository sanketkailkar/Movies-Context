"use client"
import MainPage from './mainpage/page'
import { AppContextProvider } from './context'

export default function Home() {

  return (
    <AppContextProvider>
      <MainPage/>
    </AppContextProvider>
  )
}
