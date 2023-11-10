import { Grid } from '@mui/material';
import { itemIntroInfo } from '../intro.data';

export default function ItemIntro() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {itemIntroInfo.map((item) => (
        <Grid key={item.id} item xs={2} sm={4} md={4} className="p-[15px]">
          <div className="m-5">
            <img
              src={item.icon}
              alt="icon"
              className="h-auto max-w-full align-middle border-0"
            />
            <span className="mb-5">{item.name}</span>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
