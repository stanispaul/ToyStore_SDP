import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
// import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/product/Action";




const CreateProductForm = () => {
  
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });
const dispatch=useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
    console.log(productData);
  };



  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen "
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="category">Category</MenuItem>
                <MenuItem value="Characters">Characters</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
                <MenuItem value="handmade">Handmade</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="toys">Toys & Games</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
                <MenuItem value="Cartoon">Cartoon</MenuItem>
                <MenuItem value="Anime">Anime</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="Action">Action games & toys</MenuItem>
                <MenuItem value="Games">Games & Puzzles</MenuItem>
                <MenuItem value="Soft">Soft Toys</MenuItem>
                <MenuItem value="Infant">Infant & Pre-School Toys</MenuItem>
                <MenuItem value="Doll">Dolls & Playsets</MenuItem>
                <MenuItem value="Construction">Construction & Building Toys</MenuItem>
                <MenuItem value="Outdoor">Outdoor Sports</MenuItem>
                <MenuItem value="Indoor">Indoor Sports</MenuItem>
                <MenuItem value="Leisure">Outdoor Leisure</MenuItem>
                <MenuItem value="Play">Play Structures</MenuItem>
                <MenuItem value="Ride">Ride-Ons</MenuItem>
                <MenuItem value="Scooters">Scooters</MenuItem>
                <MenuItem value="Cycles">Cycles & Tricycles</MenuItem>
                <MenuItem value="Spiderman">Spiderman</MenuItem>
                <MenuItem value="Ironman">Ironman</MenuItem>
                <MenuItem value="Doraemon">Doraemon</MenuItem>
                <MenuItem value="Shinchan">Shinchan</MenuItem>
                <MenuItem value="Batman">Batman</MenuItem>
                <MenuItem value="Oggy">Oggy</MenuItem>
                <MenuItem value="Tom and Jerry">Tom</MenuItem>
                <MenuItem value="Naruto">Naruto</MenuItem>
                <MenuItem value="One piece">piece</MenuItem>
                <MenuItem value="Jujutsu kaisen">kaisen</MenuItem>
                <MenuItem value="Demon slayer">demon</MenuItem>
                <MenuItem value="Solo leveling">Solo</MenuItem>
                <MenuItem value="Silent voice">Silent</MenuItem>
                <MenuItem value="Harry potter">potter</MenuItem>
                <MenuItem value="Toy Story">Story</MenuItem>
                <MenuItem value="The Cabbage Fairy">Cabbage</MenuItem>
                <MenuItem value="Dragon warrior">warrior</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
