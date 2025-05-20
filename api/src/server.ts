import config from './config/config';
import app from './app';

app.listen(config.port, () => {
    console.log(`api listening on port ${config.port}`);
});
