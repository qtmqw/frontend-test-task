import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const ProductAdd = () => {
    const navigate = useNavigate();

    const [switcher, setSwitcher] = useState('selectItem')

    const [dvd, setDvd] = useState(false);
    const [furniture, setFurniture] = useState(false);
    const [book, setBook] = useState(false);

    useEffect(() => {
        switcher === 'dvd'
            ? setDvd(true)
            : setDvd(false);
        switcher === 'furniture'
            ? setFurniture(true)
            : setFurniture(false);
        switcher === 'book'
            ? setBook(true)
            : setBook(false);

    }, [switcher]);

    const handleOnChange = (e) => {
        setSwitcher(e.target.value);
    }

    const [Sku, setSku] = useState('')
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Size, setSize] = useState('')
    const [Weight, setWeight] = useState('')
    const [Lenght, setLenght] = useState('')
    const [Height, setHeight] = useState('')
    const [Width, setWidth] = useState('')

    const changeOnClick = (e) => {
        e.preventDefault()

        axios.post("https://test-task-backend.onrender.com/add", {
            Sku: Sku,
            Name: Name,
            Price: Price,
            Size: Size,
            Weight: Weight,
            Height: Height,
            Width: Width,
            Lenght: Lenght,
        })

            .then(res => console.log(res.data))
        navigate("/")
    }

    return (
        <Container>
            <form
                action="#"
                id="product_form"
                required
            >
                <header>
                    <h1>Product Add</h1>
                    <div >
                        <Button variant='success' onClick={changeOnClick} className="space">Save</Button>
                        <Link to='/'><Button variant='dark'>Cancel</Button></Link>
                    </div>
                    <br />
                </header>

                <div className='flex'>
                    <div>
                        <label htmlFor="SKU" >
                            SKU
                        </label>
                    </div>
                    <div className='sku'>
                        <input
                            type="text"
                            id="sku"
                            name="sku"
                            onChange={e => setSku(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className='flex'>
                    <div >
                        <label htmlFor="Name">
                            Name
                        </label>
                    </div>
                    <div className='name'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <label htmlFor="Price">
                            Price ($)
                        </label>
                    </div>
                    <div className='price'>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            onChange={e => setPrice(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <label htmlFor="productType">Type Switcher</label>
                    </div>
                    <div>
                        <select
                            id="productType"
                            name="productType"
                            value={switcher}
                            onChange={handleOnChange}
                            className="form-select"
                        >
                            <option id="" name="" value="SalectItem">
                                Select A Product
                            </option>
                            <option id="DVD" name="DVD" value="dvd">
                                DVD
                            </option>
                            <option id="Furniture" value="furniture">
                                Furniture
                            </option>
                            <option id="Book" value="book">
                                Book
                            </option>
                        </select>
                    </div>
                </div>
                <br />
                <div>

                    {dvd &&
                        <div >
                            <div className='flex'>
                                <div>
                                    <label htmlFor="size">Size (MB)</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="size"
                                        name="size"
                                        className="form-control"
                                        onChange={e => setSize(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <b>Please, provide size in MB</b>
                            </div>
                        </div>
                    }

                    {furniture && (
                        <div>
                            <div className='flex'>
                                <div>
                                    <label htmlFor="height">Height (CM)</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="height"
                                        name="height"
                                        className="form-control"
                                        onChange={e => setHeight(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className='flex'>
                                <div>
                                    <label htmlFor="width">Width (CM)</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="width"
                                        name="width"
                                        className="form-control"
                                        onChange={e => setWidth(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className='flex'>
                                <div>
                                    <label htmlFor="length">Length (CM)</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="length"
                                        name="length"
                                        className="form-control"
                                        onChange={e => setLenght(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <b>Please, provide dimensions in CM</b>
                            </div>
                        </div>
                    )}

                    {book && (
                        <div>
                            <div className='flex'>
                                <div >
                                    <label htmlFor="weight">Weight (KG)</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="weight"
                                        name="weight"
                                        className="form-control"
                                        onChange={e => setWeight(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <b>Please, provide weight in kg</b>
                            </div>
                        </div>
                    )}
                </div>
            </form >
        </Container >
    )
}

export default ProductAdd