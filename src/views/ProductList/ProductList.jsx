import React, { useEffect, useState } from 'react';
import { TextField, Breadcrumbs, Link, Box, Container, Grid, Card, CardMedia, CardContent, Typography, Button, Select, MenuItem, FormControl, InputLabel, IconButton, makeStyles } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import CategorySection from './components/CategorySection';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('newest');
    const [priceRange, setPriceRange] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('https://dev2.mtlexpress.com.mm/qq-delivery-backend/v1/pos/product/listAllProducts/9cb87ee7-56f0-4870-9378-8f15eae8578w')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setProducts(data.data.items);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value);
    };

    const toggleFavorite = (guid) => {
        setFavorites((prev) =>
            prev.includes(guid) ? prev.filter((item) => item !== guid) : [...prev, guid]
        );
    };

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === 'newest') {
            return new Date(b.createdOn) - new Date(a.createdOn);
        }
        return a.priceSell - b.priceSell;
    });

    const filteredProducts = sortedProducts.filter((product) => {
        if (!priceRange) return true;
        const [min, max] = priceRange.split('-').map(Number);
        return product.priceSell >= min && product.priceSell <= max;
    });


    const useStyles = makeStyles((theme) => ({
        container: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 0,
            padding: '50px 30px', // Ensure no padding
            width: '100%', // Ensure full width
        },



    }));

    const classes = useStyles();


    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (

        <Box className={classes.container}>

            <CategorySection />


            <Container>
                {/* <Typography variant="h5" gutterBottom>
                    Home &gt; All Categories &gt; Others &gt; Books
                </Typography> */}

                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Home
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        All Categories
                    </Link>
                    <Typography color="textPrimary">Books</Typography>
                </Breadcrumbs>


                <Box className={classes.container} style={{ padding: '30px 0px', alignItems: 'center' }}>


                    <Box fontWeight="fontWeightBold" style={{ width: '50%' }}>
                        <Typography variant="h6" gutterBottom>
                            Showing Books
                        </Typography>
                    </Box>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>

                            <FormControl fullWidth>
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    label="Sort By"
                                    // value={currency}
                                    // onChange={handleChange}
                                    // helperText="Please select your currency"
                                    variant="filled"
                                    onChange={handleSortChange}
                                >
                                    <MenuItem value="newest">Newest</MenuItem>
                                    <MenuItem value="price-asc">Price: Low to High</MenuItem>
                                    <MenuItem value="price-desc">Price: High to Low</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    label="Price"
                                    // value={currency}
                                    // onChange={handleChange}
                                    // helperText="Please select your currency"
                                    variant="filled"
                                    onChange={handlePriceRangeChange}
                                >
                                    <MenuItem value="">Select Range</MenuItem>
                                    <MenuItem value="0-10000">0 - 10,000 MMK</MenuItem>
                                    <MenuItem value="10000-20000">10,000 - 20,000 MMK</MenuItem>

                                    {/* <MenuItem value="newest">Newest</MenuItem>
                                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                                <MenuItem value="price-desc">Price: High to Low</MenuItem> */}


                                    {/* {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))} */}
                                </TextField>
                            </FormControl>
                        </Grid>
                    </Grid>

                </Box>



                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {filteredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.guid}>
                            <Card style={{ position: 'relative' }}>
                                <CardMedia
                                    style={{ height: 0, paddingTop: '100%' }}
                                    image={product.img ? `https://dev2.mtlexpress.com.mm/qq-delivery-backend/v1/image/download/${product.img}` : './comingSoon.jpg'}
                                    title={product.displayName}
                                />
                                <CardContent>
                                    <Typography variant="h6">{product.displayName}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Category: {product.category}
                                    </Typography>
                                    <Typography variant="body1" color="primary">
                                        MMK {product.priceSell.toLocaleString()}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        style={{ marginTop: '10px', display: 'block', width: '100%' }}
                                        onClick={() => alert(`Added ${product.displayName} to cart`)}
                                    >
                                        Add To Cart
                                    </Button>
                                </CardContent>
                                <IconButton
                                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                                    onClick={() => toggleFavorite(product.guid)}
                                >
                                    {favorites.includes(product.guid) ? (
                                        <Favorite color="error" />
                                    ) : (
                                        <FavoriteBorder />
                                    )}
                                </IconButton>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>

    );
};

export default ProductList;
