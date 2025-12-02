import { db } from "../data/data.js";
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function obtenerProductos() {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function obtenerProducto(id) {
  const ref = doc(productsCollection, id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return null;
  }

  return { id: snap.id, ...snap.data() };
}

export async function agregarProducto(product) {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
}

export async function eliminarProducto(id) {
  const ref = doc(productsCollection, id);
  await deleteDoc(ref);
}
