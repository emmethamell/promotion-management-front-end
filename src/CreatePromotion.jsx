import React, { useState } from 'react'
import Dropdown1 from './Dropdown1'
import TextInput from './TextInput';
import DateSelection from './DateSelection';
import axios from 'axios';

/*
PROMO CODE: 
    @ManyToOne
    @JoinColumn(name = "campaignId", nullable = false) //PromoCode entity is joined to Campaign entity via a foriegn key, the one in campaign
    private Campaign campaign;

    private String code;
    private String discountType;
    private BigDecimal discountValue;
    private BigDecimal minimumSpend;
    private LocalDate expirationDate;
    private Integer usageLimit;
    private Integer usageCount;

    "{"campaign":"5","code":"NOVEMBERPROMOTION","startDate":"2024-11-06","endDate":"2025-01-17","usageLimit":"25","usageCount":"1","discountValue":"20","discountType":"PERCENT"}"
    "{"campaign":"5","code":"NOVEMBERPROMOTION","startDate":"2024-11-06","endDate":"2025-01-17","usageLimit":"25","usageCount":"1","minimumSpend":"156","discountValue":"20","discountType":"PERCENT"}"
    "{"campaign":5,"code":"NOVEMBERPROMOTION","startDate":"2024-11-06","endDate":"2025-01-17","usageLimit":25,"usageCount":1,"minimumSpend":156,"discountValue":20,"discountType":null}"
    "{"campaign":5,"code":"NOVEMBERPROMOTION","startDate":"2024-11-06","endDate":"2025-01-17","usageLimit":25,"usageCount":1,"minimumSpend":156,"discountValue":20,"discountType":null}"
    "{"campaign":5,"code":"NOVEMBERPROMOTION","startDate":"2024-11-06","endDate":"2025-01-17","usageLimit":25,"usageCount":1,"minimumSpend":156,"discountValue":20,"discountType":"PERCENT"}"
COUPON:
    @ManyToOne
    @JoinColumn(name = "campaignId", nullable = false)
    private Campaign campaign;

    private String code;
    private BigDecimal discountAmount;
    private BigDecimal minimumSpend;
    private LocalDate expirationDate;
    private Integer usageLimit;
    private Integer usageCount;


BOTH
    campaignId
    code
    expirationDate
    usageLimit
    usageCount

PROMO ONLY
    discountValue
    discountType
COUPON ONLY
    discountAmount




*/

function CreatePromotion() {

    const campaign = 5
    const [promoType, setPromoType] = useState('')
    const [code, setCode] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [usageLimit, setUsageLimit] = useState('')
    const usageCount = 1
    const minimumSpend = 156


    //promo
    const [discountValue, setDiscountValue] = useState('')
    const [discountType, setDiscountType] = useState('')

    //coupon
    const [discountAmount, setDiscountAmount] = useState('')

    const onPromoChange = (value) => {
        setPromoType(value)
    }
    const onCodeChange = (value) => {
        setCode(value)
    }
    const onDiscountTypeChange = (value) => {
        setDiscountType(value)
    }
    const onDiscountValueChange = (value) => {
        setDiscountValue(value)
    }
    const onDiscountAmountChange = (value) => {
        setDiscountAmount(value)
    }
    const handleDateChange = (type, value) => {
        if (type == 'start') {
            setStartDate(value)
        } else {
            setEndDate(value)
        }
    }
    const onUsageLimitChange = (value) => {
        setUsageLimit(value)
    }

    const handleCreatePromotion = () => {
        const commonData = {
            campaign,
            code,
            startDate,
            endDate,
            usageLimit: Number(usageLimit),
            usageCount,
            minimumSpend
        };

        if (promoType === 'Promo Code') {
            const promoCodeData = {
                ...commonData,
                discountValue: Number(discountValue),
                discountType
            };
            axios.post('http://localhost:8080/api/promocodes', promoCodeData)
                .then(response => {
                    console.log('Promo code created:', response.data);
                    alert('Promo code created successfully!');
                })
                .catch(error => {
                    console.error('Error creating promo code:', error);
                    alert('Failed to create promo code.');
                });
        } else if (promoType === 'Coupon') {
            const couponData = {
                ...commonData,
                discountAmount: Number(discountAmount)
            };
            axios.post('http://localhost:8080/api/coupons', couponData)
                .then(response => {
                    console.log('Coupon created:', response.data);
                    alert('Coupon created successfully!');
                })
                .catch(error => {
                    console.error('Error creating coupon:', error);
                    alert('Failed to create coupon.');
                });
        } else {
            alert('Please select a valid promotion type.');
        }
    };


    return (
        <>
        <div>
            Enter Code: <TextInput onChange={onCodeChange}/>
            {code}
        </div>
        <div>
            Select Promo Type: <Dropdown1 onChange={onPromoChange}/>
            {promoType}
        </div>
        <div>
            {promoType == 'Promo Code' && <h4>Discount Type: <TextInput onChange={onDiscountTypeChange}/> </h4>}
            {promoType == 'Promo Code' && <h4>Discount Value:<TextInput onChange={onDiscountValueChange}/> </h4>}
        </div>
        <div>
            {promoType == 'Coupon' && <h4>Discount Amount: <TextInput onChange={onDiscountAmountChange}/> </h4>}
        </div>
        <h4>
            Usage Limit: <TextInput onChange={onUsageLimitChange}/>
        </h4>
        <h4>
            Choose dates: <DateSelection onChange={handleDateChange}/>
        </h4>
        <h4>
            Start Date: {startDate}
        </h4>
        <h4>
            End Date: {endDate}
        </h4>
        <button onClick={handleCreatePromotion} className="submit-button">
            Create Promotion
        </button>
        </>
    )
}

export default CreatePromotion