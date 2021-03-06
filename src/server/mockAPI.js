let json = {
    "status": {
        "code": 0,
        "msg": "OK",
        "credits": "1",
        "remaining_credits": "19995"
    },
    "model": "general_en",
    "score_tag": "P",
    "agreement": "DISAGREEMENT",
    "subjectivity": "SUBJECTIVE",
    "confidence": "86",
    "irony": "NONIRONIC",
    "sentence_list": [
        {
            "text": "Main dishes were quite good, but desserts were too sweet for me.",
            "inip": "0",
            "endp": "63",
            "bop": "y",
            "confidence": "86",
            "score_tag": "P",
            "agreement": "DISAGREEMENT",
            "segment_list": [
                {
                    "text": "Main dishes were quite good",
                    "segment_type": "main",
                    "inip": "0",
                    "endp": "26",
                    "confidence": "98",
                    "score_tag": "P+",
                    "agreement": "AGREEMENT",
                    "polarity_term_list": [
                        {
                            "text": "(quite) good",
                            "inip": "23",
                            "endp": "26",
                            "confidence": "98",
                            "score_tag": "P+"
                        }
                    ]
                },
                {
                    "text": "desserts were too sweet for me",
                    "segment_type": "main",
                    "inip": "33",
                    "endp": "62",
                    "confidence": "92",
                    "score_tag": "N",
                    "agreement": "AGREEMENT",
                    "polarity_term_list": [
                        {
                            "text": "(too) sweet@A",
                            "inip": "51",
                            "endp": "55",
                            "confidence": "92",
                            "score_tag": "N",
                            "sentimented_concept_list": [
                                {
                                    "form": "dessert",
                                    "id": "0e15bbd941",
                                    "variant": "desserts",
                                    "inip": "33",
                                    "endp": "40",
                                    "type": "Top>Product>Food",
                                    "score_tag": "N"
                                }
                            ]
                        }
                    ],
                    "segment_list": [
                        {
                            "text": "too sweet for me",
                            "segment_type": "main",
                            "inip": "47",
                            "endp": "62",
                            "confidence": "92",
                            "score_tag": "N",
                            "agreement": "AGREEMENT",
                            "polarity_term_list": [
                                {
                                    "text": "(too) sweet@A",
                                    "inip": "51",
                                    "endp": "55",
                                    "confidence": "92",
                                    "score_tag": "N"
                                }
                            ]
                        }
                    ]
                }
            ],
            "sentimented_entity_list": [],
            "sentimented_concept_list": [
                {
                    "form": "dessert",
                    "id": "0e15bbd941",
                    "type": "Top>Product>Food",
                    "score_tag": "N"
                }
            ]
        }
    ],
    "sentimented_entity_list": [],
    "sentimented_concept_list": [
        {
            "form": "dessert",
            "id": "0e15bbd941",
            "type": "Top>Product>Food",
            "score_tag": "N"
        }
    ]
};

module.exports = json;
