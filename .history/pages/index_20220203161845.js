import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import useStyles from '../utils/styles';

export default function Home() {
  const classes = useStyles;
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
      </ul>
    </Layout>
  );
}
