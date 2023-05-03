import { Typography, Button, IconButton, Stack, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import getAllCategories from '../../Services/getAllCategories'

function CategoriesNavBar() {
  
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
  
    async function fetchData() {
      const categories = await getAllCategories()
      setCategories(categories)
    }
  
    fetchData()
  }, [])

  return (
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      paddingY={1}
      sx={{ color: 'black', overflow: 'auto' }}
    >
      {categories.map((category) => {
        return (
          <IconButton key={category.name} sx={{ p: 0 }}>
            <Button href={`/category/${category.name}`} sx={{ p: 0 }}>
              <Typography variant='body2'>
                { category.name }
              </Typography>
            </Button>
          </IconButton>
        )
      })}
      
    </Stack>
  )
}

export default CategoriesNavBar