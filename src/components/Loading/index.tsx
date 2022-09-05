import LoadingSpin from 'react-loading-spin'

export function Loading() {
  return (
    <LoadingSpin
      width="3px"
      size="20px"
      primaryColor="#219ebc"
      secondaryColor="#8ecae6"
    />
  )
}