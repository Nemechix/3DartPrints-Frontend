import { Typography, Button, IconButton, Stack, Divider, Skeleton } from '@mui/material'
import { useState, useEffect } from 'react'
import getAllCategories from '../../Services/getAllCategories'
import { Link } from 'react-router-dom'

function CategoriesNavBar() {
  
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
  
    async function fetchData() {
      setLoading(true)
      const categories = await getAllCategories()
      setCategories(categories)
      setLoading(false)
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
      {loading ? <>
        <Skeleton animation='wave' sx={{ width:'100%' }}/>
        <Skeleton animation='wave' sx={{ width:'100%' }}/>
        <Skeleton animation='wave' sx={{ width:'100%' }}/>
        <Skeleton animation='wave' sx={{ width:'100%' }}/>
        </> : categories.map((category) => {
        return (
          <IconButton key={category.name} sx={{ p: 0 }}>
            <Link
              to={`/category/${category.name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography variant="body2">
                {category.name.toUpperCase()}
              </Typography>
            </Link>
          </IconButton>
        )
      })}
      
    </Stack>
  )
}

export default CategoriesNavBar