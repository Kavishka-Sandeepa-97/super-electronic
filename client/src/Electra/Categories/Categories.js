import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, NavLink } from 'react-router-dom';

// return dropdown of all categories
const Categories = () => {

  const CategoriesNames = [
    {
      id: 1,
      name: 'refrigerators',
      category: 'Refrigerators and Freezers'
    },
    {
      id: 2,
      name: 'computers',
      category: 'Computers and Communication'
    },
    {
      id: 3,
      name: 'washings',
      category: 'Laundry and Drying'
    },
    {
      id: 4,
      name: 'cosmetics',
      category: 'Grooming and Styling Products'
    },
    {
      id: 5,
      name: 'kitchen',
      category: 'Kitchen Appliances'
    },
    {
      id: 6,
      name: 'ovens',
      category: 'Ovens and Stovetops'
    },
    {
      id: 7,
      name: 'airConditioners',
      category: 'Air Conditioners and Fans'
    },
  ]

  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        aria-controls="simple-menu" 
        variant="outlined" 
        color="secondary" 
        aria-haspopup="true" 
        onClick={handleClick} 
        style={{ fontSize: '15px', color: 'yellow' }}
      >
        Product Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {CategoriesNames.map((i) => (
          <MenuItem key={i.id} style={{ borderColor: 'yellow', fontSize: '18px' }} component={NavLink} to={`/items/${i.name}`}>
            {i.category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Categories;
