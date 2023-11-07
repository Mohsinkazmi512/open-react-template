import Head from 'next/head';

function StaticMap() {
  return (
    <div>
      <Head>
        <title>Static Map</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=YOUR_LATITUDE,YOUR_LONGITUDE&zoom=14&size=600x300&key=YOUR_API_KEY`}
        alt="Static Map"
      />
    </div>
  );
}

export default StaticMap;
