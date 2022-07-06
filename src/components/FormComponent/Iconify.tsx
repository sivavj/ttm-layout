import PropTypes from 'prop-types';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};
// interface Types{
//     icon:string;
//     sx:string;
//     other:number
// }
export default function Iconify({ icon, sx, ...other }:any) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
