import { useState, useEffect } from 'react'
import './App.css'
import CampaignForm from './components/CampaignForm'
import { Campaign } from '@campaigns/shared-types'
import CampaignList from './components/CampaignList'

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  const fetchCampaigns = async () => {
    const response = await fetch('http://localhost:4000/api/campaigns')
    setCampaigns(await response.json())
  }

  useEffect(() => {
    fetchCampaigns()
  }, [])

  return (
    <>
    <div>
      <CampaignForm onCreated={fetchCampaigns} />
      <CampaignList campaigns={campaigns} onDelete={fetchCampaigns} />
    </div>
    </>
  )
}

export default App
