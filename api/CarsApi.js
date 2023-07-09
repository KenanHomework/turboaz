class ApiService {
  _apiBaseUrl = "https://productviewerapi.azurewebsites.net/";

  async getResources(url) {
    const response = await fetch(`${this._apiBaseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url},received ${response.status}`);
    }

    return await response.json();
  }

  getLastListings = async (count) => {
    const cars = [];
    for (let i = 0; i < count; i++) {
      cars.push({
        id: "7485580",
        price: 288000,
        hasVin: i % 2 === 0,
        title: "BMW XM",
        year: 2023,
        engineVolume: 2.2,
        mileage: 0,
        city: "Bakı",
        updateDate: "19.06.2023 20:14",
        imageLink:
          "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F60a0f564-ab10-4bd8-b816-8c4bd39bb3f1%2F40793_B2AeNymLfy1RrqY9h7F3IQ.jpg",
      });
    }

    return cars;
  };

  getCars = async (searchQuery, sortingType) => {
    const cars = [];
    const count = sortingType ? 20 : 24;
    for (let i = 0; i < count; i++) {
      cars.push({
        id: "7485580",
        price: 288000,
        hasVin: i % 2 === 0,
        title: "BMW XM",
        year: 2023,
        engineVolume: 2.2,
        mileage: 0,
        city: "Bakı",
        updateDate: "19.06.2023 20:14",
        imageLink:
          "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F60a0f564-ab10-4bd8-b816-8c4bd39bb3f1%2F40793_B2AeNymLfy1RrqY9h7F3IQ.jpg",
      });
    }

    return cars;
  };

  getCar = (id) => {
    const car = {
      id: id,
      vendor: "BMW",
      model: "XM",
      engineVolume: 4.4,
      year: 2023,
      price: 278500,
      vin: "WBA3A5G53ENP29464",
      owner: { name: "Emil", city: "Bakı", phone: "(070) 399-99-99" },
      updated: "27.06.2023",
      viewCount: 23073,
      city: "Bakı",
      gearBox: "Avtomat",
      transmission: "Tam",
      marketAssembled: "Rəsmi diler",
      banType: "Offroader / SUV",
      color: "Boz",
      horsePower: 653,
      fuel: "Plug-in Hibrid",
      mileage: 290000,
      description:
        "ID.6 CROZZ PRO\n" +
        "\n" +
        "2 İL ZƏMANƏT limitsiz yürüş.\n" +
        "\n" +
        "Avtomobillər Bakıdadır. Geniş rəng seçim imkanı var. Gəlib yaxından tanış olub, avtomobilləri sınaq yürüşü etmek mümkündür.\n" +
        "\n" +
        "Avtomobil tam dolu şarjla 617 km məsafə qət edir.\n" +
        "\n" +
        "- Ambient light\n" +
        "- LED fənərlər (MATRİX LED)\n" +
        "- Adaptiv kruiz kontrol\n" +
        "- Zolağa nəzarət sistemı\n" +
        "- Yol nişanların tanınması\n" +
        "- Kör bucaqlara nəzarət sistemı\n" +
        "- Ön və arxa park radarlar\n" +
        "- 360 kamera\n" +
        "- CarPlay (simsiz)\n" +
        "- Simsiz şarj\n" +
        "- Avtomatik uzağ vuran işıqlar\n" +
        "- Açarsız daxil olma\n" +
        "- Start Stop\n" +
        "- İşıq sensoru\n" +
        "- Yağış sensoru\n" +
        "- Panorama tavan\n" +
        "- Front Assist\n" +
        "- Head up display\n" +
        "- Auto hold\n" +
        "- Üç zonalı smart iqlimə nəzarət sistemı\n" +
        "- Avtomatik tündləşən salon güzgüsü\n" +
        "- Multifunksional qızdırılan sükan\n" +
        "- Elektron cihazlar paneli\n" +
        "- 4 sürmə rejimi (ECO, SPORT, COMFORT, İNDİVİDUAL)\n" +
        "- Ön oturacaqların isidilməsi\n" +
        "- Arxa oturacaqların isidilməsi\n" +
        "- Ön oturacaqların masaj funksiyası\n" +
        "- Ön oturacaqların elektron tənzimlənməsi\n" +
        "- Memory Paket\n" +
        "- WI-FI\n" +
        "- Multimedianın səslə idarə olunması",
      equipments: [
        "Yüngül lehimli disklər",
        "ABS",
        "Lyuk",
        "Yağış sensoru",
        "Mərkəzi qapanma",
        "Park radarı",
        "Kondisioner",
        "Oturacaqların isidilməsi",
        "Dəri salon",
        "Ksenon lampalar",
        "Arxa görüntü kamerası",
        "Yan pərdələr",
        "Oturacaqların ventilyasiyası",
      ],
      images: [
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F60a0f564-ab10-4bd8-b816-8c4bd39bb3f1%2F40793_B2AeNymLfy1RrqY9h7F3IQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/thumbnail/2023%2F06%2F19%2F19%2F52%2F40%2F60a0f564-ab10-4bd8-b816-8c4bd39bb3f1%2F40793_B2AeNymLfy1RrqY9h7F3IQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F31%2Fbcb3fb1f-4e99-4d2d-b0fa-70f5cb870038%2F60368_hBMesqxn7yeunyS47Fq4Tw.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/thumbnail/2023%2F06%2F19%2F19%2F52%2F31%2Fbcb3fb1f-4e99-4d2d-b0fa-70f5cb870038%2F60368_hBMesqxn7yeunyS47Fq4Tw.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F36%2F84204828-03df-46b5-b796-9426d8bb19ab%2F60344_iuyEVZEhn36_evBsXg7OKw.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/thumbnail/2023%2F06%2F19%2F19%2F52%2F36%2F84204828-03df-46b5-b796-9426d8bb19ab%2F60344_iuyEVZEhn36_evBsXg7OKw.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F39%2F78acae7f-1ebe-4d4f-aabe-176cc2cb2be3%2F40793_SM6NsoJ6qtAJntgm5vWgLQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/thumbnail/2023%2F06%2F19%2F19%2F52%2F39%2F78acae7f-1ebe-4d4f-aabe-176cc2cb2be3%2F40793_SM6NsoJ6qtAJntgm5vWgLQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2Fe44dcf06-9653-4ab2-b9a1-63f248d15830%2F60368_Cih2N3FTkC_cbcNTxX6_Tw.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/thumbnail/2023%2F06%2F19%2F19%2F52%2F33%2Fe44dcf06-9653-4ab2-b9a1-63f248d15830%2F60368_Cih2N3FTkC_cbcNTxX6_Tw.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F22a92a4b-2261-4214-b9dc-ea8a52a3bf8d%2F60349_ogDM3s-YNaU4zGC0lPDiPg.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F22a92a4b-2261-4214-b9dc-ea8a52a3bf8d%2F60349_ogDM3s-YNaU4zGC0lPDiPg.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2F3b539d34-4e73-4714-98c4-a34cbff01002%2F60347_5PUlrOrkukJkvzIJv0ufCA.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2F3b539d34-4e73-4714-98c4-a34cbff01002%2F60347_5PUlrOrkukJkvzIJv0ufCA.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F4ca81b67-61bf-46c7-8a82-8165f6b0ab62%2F60338_GVoCb7etdQ0OON4KjETlvQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F4ca81b67-61bf-46c7-8a82-8165f6b0ab62%2F60338_GVoCb7etdQ0OON4KjETlvQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2F07f57462-8044-4a17-9f69-55cf22ebb52a%2F60358_K2yjgNU7Ftl1E-zlGJjFqQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2F07f57462-8044-4a17-9f69-55cf22ebb52a%2F60358_K2yjgNU7Ftl1E-zlGJjFqQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F26%2Fad157d14-a352-451d-8517-8c80369b3191%2F79825_Mbz9OogEv4a7FvlDk4MfIA.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F26%2Fad157d14-a352-451d-8517-8c80369b3191%2F79825_Mbz9OogEv4a7FvlDk4MfIA.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F34%2Ff2d16cd2-22d9-4df5-85dd-42eb1ea5bcaf%2F60321_nej7sOMI8mP2CM-O0LSRbg.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F34%2Ff2d16cd2-22d9-4df5-85dd-42eb1ea5bcaf%2F60321_nej7sOMI8mP2CM-O0LSRbg.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2Fa53dc5ee-54f7-4f48-9a95-b4894ac004bf%2F60339_zWnM6zfzV4slllIJ35WPFQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F33%2Fa53dc5ee-54f7-4f48-9a95-b4894ac004bf%2F60339_zWnM6zfzV4slllIJ35WPFQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F41%2F87b1b138-c728-4b4e-8f33-4c920db96138%2F40793_DcOrcfS0S6CWigx-71R32w.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F41%2F87b1b138-c728-4b4e-8f33-4c920db96138%2F40793_DcOrcfS0S6CWigx-71R32w.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F35%2F5a2d6ff3-ba6b-4ec9-af6c-07fd0fe6f5cb%2F60326_C1LUj6VRcewx_0aOasJt_g.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F35%2F5a2d6ff3-ba6b-4ec9-af6c-07fd0fe6f5cb%2F60326_C1LUj6VRcewx_0aOasJt_g.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F36%2F04bf3a9d-fe49-44ca-93a4-d22c4658be74%2F60326_-WNlUIEYh1D3W2FiWkJ7Ug.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F36%2F04bf3a9d-fe49-44ca-93a4-d22c4658be74%2F60326_-WNlUIEYh1D3W2FiWkJ7Ug.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F32%2F9e5058b2-27af-457b-b67b-c2daaa50c605%2F60368_rZqId3p7ON01vQ-7SYXYOw.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F32%2F9e5058b2-27af-457b-b67b-c2daaa50c605%2F60368_rZqId3p7ON01vQ-7SYXYOw.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F24%2F1c2bb7be-1d90-49ce-a349-91494cc399b1%2F99074_j0TqJ1PHWRkOmWV0q3bcng.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F24%2F1c2bb7be-1d90-49ce-a349-91494cc399b1%2F99074_j0TqJ1PHWRkOmWV0q3bcng.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2Fcf3c03bc-3df2-4a39-8d9b-2fcfbb67ec1c%2F60373_825eXltJJqlnOfRbCeyjXQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2Fcf3c03bc-3df2-4a39-8d9b-2fcfbb67ec1c%2F60373_825eXltJJqlnOfRbCeyjXQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F29%2F7ba37ea6-98c3-43b9-bf30-74d4b76d3ae2%2F93735_19bZKR-Jw9zQUthr9uTeYg.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F29%2F7ba37ea6-98c3-43b9-bf30-74d4b76d3ae2%2F93735_19bZKR-Jw9zQUthr9uTeYg.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F35%2F2d274b65-d25e-4d96-bb9b-0079042947e3%2F60333_SBtrRJT5ql-qXuJjM6omsQ.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F35%2F2d274b65-d25e-4d96-bb9b-0079042947e3%2F60333_SBtrRJT5ql-qXuJjM6omsQ.jpg",
        },
        {
          original:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F20%2F35a48f33-8cea-4e28-85f5-29cc3f71f695%2F98863_DfmZ4UgrPevPQ7nzwJ580w.jpg",
          thumbnail:
            "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F20%2F35a48f33-8cea-4e28-85f5-29cc3f71f695%2F98863_DfmZ4UgrPevPQ7nzwJ580w.jpg",
        },
      ],
    };
    return car;
  };
}

export default ApiService;
