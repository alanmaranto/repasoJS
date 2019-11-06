const moviesMock = [
    {
      "id": "2327809a-6d36-4b89-b6c1-e52db9e78029",
      "title": "Man from Elysian Fields, The",
      "year": 2011,
      "cover": "http://dummyimage.com/236x105.png/dddddd/000000",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "duration": 99,
      "contentRating": "G",
      "source": "http://netvibes.com/nunc/purus.js?turpis=et&a=eros&pede=vestibulum&posuere=ac&nonummy=est&integer=lacinia&non=nisi&velit=venenatis&donec=tristique&diam=fusce&neque=congue&vestibulum=diam&eget=id&vulputate=ornare&ut=imperdiet&ultrices=sapien&vel=urna&augue=pretium&vestibulum=nisl&ante=ut&ipsum=volutpat&primis=sapien&in=arcu&faucibus=sed&orci=augue&luctus=aliquam&et=erat&ultrices=volutpat&posuere=in&cubilia=congue&curae=etiam&donec=justo&pharetra=etiam&magna=pretium&vestibulum=iaculis&aliquet=justo&ultrices=in&erat=hac&tortor=habitasse&sollicitudin=platea&mi=dictumst&sit=etiam&amet=faucibus&lobortis=cursus&sapien=urna&sapien=ut&non=tellus&mi=nulla&integer=ut&ac=erat&neque=id&duis=mauris&bibendum=vulputate&morbi=elementum&non=nullam&quam=varius&nec=nulla&dui=facilisi&luctus=cras&rutrum=non&nulla=velit&tellus=nec&in=nisi&sagittis=vulputate&dui=nonummy&vel=maecenas&nisl=tincidunt&duis=lacus&ac=at&nibh=velit&fusce=vivamus&lacus=vel&purus=nulla&aliquet=eget&at=eros&feugiat=elementum&non=pellentesque",
      "tags": ["Animation|Children|Musical"]
    },
    {
      "id": "37edd50c-6a0c-491b-8e38-697aed090382",
      "title": "Where a Good Man Goes (Joi gin a long)",
      "year": 1987,
      "cover": "http://dummyimage.com/186x144.bmp/dddddd/000000",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "duration": 329,
      "contentRating": "G",
      "source": "https://squidoo.com/mattis/egestas/metus/aenean/fermentum.jsp?posuere=non&cubilia=velit&curae=donec&duis=diam&faucibus=neque&accumsan=vestibulum&odio=eget&curabitur=vulputate&convallis=ut&duis=ultrices&consequat=vel&dui=augue&nec=vestibulum&nisi=ante&volutpat=ipsum&eleifend=primis&donec=in&ut=faucibus&dolor=orci&morbi=luctus&vel=et&lectus=ultrices&in=posuere&quam=cubilia&fringilla=curae&rhoncus=donec&mauris=pharetra&enim=magna&leo=vestibulum&rhoncus=aliquet&sed=ultrices&vestibulum=erat",
      "tags": ["Drama|Romance", "Horror|Sci-Fi", "Drama"]
    },
    {
      "id": "112eec22-c106-4980-9932-ea64ad12cb1b",
      "title": "Shark Alarm at Müggelsee (Hai Alarm am Müggelsee)",
      "year": 1997,
      "cover": "http://dummyimage.com/200x211.bmp/5fa2dd/ffffff",
      "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "duration": 143,
      "contentRating": "PG-13",
      "source": "https://lycos.com/libero/nullam/sit/amet/turpis/elementum/ligula.xml?justo=at&nec=lorem&condimentum=integer&neque=tincidunt&sapien=ante&placerat=vel&ante=ipsum",
      "tags": ["Action|Drama"]
    },
    {
      "id": "91af7f01-1ad7-4108-88a7-2e67c90eaf6c",
      "title": "Carmina and Amen (Carmina y amén)",
      "year": 2003,
      "cover": "http://dummyimage.com/229x225.png/dddddd/000000",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      "duration": 170,
      "contentRating": "G",
      "source": "https://hibu.com/sit/amet/consectetuer/adipiscing.js?id=in&mauris=faucibus&vulputate=orci&elementum=luctus&nullam=et&varius=ultrices&nulla=posuere&facilisi=cubilia&cras=curae&non=duis&velit=faucibus&nec=accumsan&nisi=odio&vulputate=curabitur&nonummy=convallis&maecenas=duis&tincidunt=consequat&lacus=dui&at=nec&velit=nisi&vivamus=volutpat&vel=eleifend&nulla=donec&eget=ut&eros=dolor&elementum=morbi&pellentesque=vel&quisque=lectus&porta=in&volutpat=quam&erat=fringilla&quisque=rhoncus&erat=mauris&eros=enim&viverra=leo&eget=rhoncus&congue=sed&eget=vestibulum&semper=sit&rutrum=amet&nulla=cursus&nunc=id&purus=turpis&phasellus=integer&in=aliquet&felis=massa&donec=id&semper=lobortis&sapien=convallis&a=tortor&libero=risus&nam=dapibus&dui=augue&proin=vel&leo=accumsan&odio=tellus&porttitor=nisi&id=eu&consequat=orci&in=mauris&consequat=lacinia&ut=sapien&nulla=quis&sed=libero&accumsan=nullam&felis=sit&ut=amet&at=turpis&dolor=elementum&quis=ligula&odio=vehicula&consequat=consequat&varius=morbi&integer=a&ac=ipsum&leo=integer&pellentesque=a&ultrices=nibh&mattis=in&odio=quis&donec=justo&vitae=maecenas&nisi=rhoncus&nam=aliquam&ultrices=lacus&libero=morbi&non=quis&mattis=tortor&pulvinar=id&nulla=nulla&pede=ultrices",
      "tags": ["Action|Adventure|Animation|Children"]
    },
    {
      "id": "5ad12160-57cc-4cae-9afa-16ac68e85afc",
      "title": "The... Beautiful Country",
      "year": 2001,
      "cover": "http://dummyimage.com/157x133.jpg/ff4444/ffffff",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "duration": 292,
      "contentRating": "NC-17",
      "source": "http://washington.edu/scelerisque/mauris/sit/amet/eros/suspendisse.jsp?quis=dictumst&libero=maecenas&nullam=ut&sit=massa&amet=quis&turpis=augue&elementum=luctus&ligula=tincidunt&vehicula=nulla&consequat=mollis&morbi=molestie&a=lorem&ipsum=quisque&integer=ut&a=erat&nibh=curabitur&in=gravida&quis=nisi&justo=at&maecenas=nibh&rhoncus=in&aliquam=hac&lacus=habitasse&morbi=platea&quis=dictumst&tortor=aliquam&id=augue&nulla=quam&ultrices=sollicitudin&aliquet=vitae&maecenas=consectetuer&leo=eget&odio=rutrum&condimentum=at&id=lorem&luctus=integer&nec=tincidunt&molestie=ante&sed=vel&justo=ipsum&pellentesque=praesent&viverra=blandit&pede=lacinia&ac=erat&diam=vestibulum&cras=sed&pellentesque=magna&volutpat=at&dui=nunc",
      "tags": ["Adventure|Animation|Children|Comedy|Drama"]
    },
    {
      "id": "9837b463-fbbd-4da6-a3c7-0fb4855db697",
      "title": "Breakfast of Champions",
      "year": 2006,
      "cover": "http://dummyimage.com/195x138.png/dddddd/000000",
      "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "duration": 290,
      "contentRating": "PG",
      "source": "http://e-recht24.de/ipsum/praesent/blandit/lacinia.png?turpis=ut&elementum=ultrices&ligula=vel&vehicula=augue&consequat=vestibulum&morbi=ante&a=ipsum&ipsum=primis&integer=in&a=faucibus&nibh=orci&in=luctus&quis=et&justo=ultrices&maecenas=posuere&rhoncus=cubilia",
      "tags": ["Crime", "Drama|Romance"]
    },
    {
      "id": "fb8e62b1-3fc3-44d3-9ec4-4862f8e6ab83",
      "title": "Beneath the Valley of the Ultra-Vixens",
      "year": 2011,
      "cover": "http://dummyimage.com/189x192.png/5fa2dd/ffffff",
      "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "duration": 4,
      "contentRating": "PG",
      "source": "https://myspace.com/curae.json?magna=sed&vulputate=interdum&luctus=venenatis&cum=turpis&sociis=enim&natoque=blandit&penatibus=mi&et=in&magnis=porttitor&dis=pede&parturient=justo&montes=eu&nascetur=massa&ridiculus=donec&mus=dapibus&vivamus=duis&vestibulum=at&sagittis=velit&sapien=eu&cum=est&sociis=congue&natoque=elementum&penatibus=in&et=hac&magnis=habitasse&dis=platea&parturient=dictumst&montes=morbi&nascetur=vestibulum&ridiculus=velit&mus=id&etiam=pretium&vel=iaculis&augue=diam&vestibulum=erat&rutrum=fermentum&rutrum=justo&neque=nec&aenean=condimentum&auctor=neque&gravida=sapien&sem=placerat&praesent=ante&id=nulla&massa=justo&id=aliquam&nisl=quis&venenatis=turpis&lacinia=eget&aenean=elit&sit=sodales&amet=scelerisque&justo=mauris&morbi=sit&ut=amet",
      "tags": ["Comedy|Drama", "(no genres listed)"]
    },
    {
      "id": "641a9f94-bb0e-4acd-ae6d-4f775664a424",
      "title": "Alien Hunter",
      "year": 2003,
      "cover": "http://dummyimage.com/170x186.png/cc0000/ffffff",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "duration": 329,
      "contentRating": "NC-17",
      "source": "https://newsvine.com/hac/habitasse.json?magnis=amet&dis=sapien&parturient=dignissim&montes=vestibulum&nascetur=vestibulum&ridiculus=ante&mus=ipsum&vivamus=primis&vestibulum=in&sagittis=faucibus&sapien=orci&cum=luctus&sociis=et&natoque=ultrices&penatibus=posuere&et=cubilia&magnis=curae&dis=nulla&parturient=dapibus&montes=dolor&nascetur=vel&ridiculus=est&mus=donec&etiam=odio&vel=justo&augue=sollicitudin&vestibulum=ut&rutrum=suscipit&rutrum=a&neque=feugiat&aenean=et&auctor=eros&gravida=vestibulum&sem=ac&praesent=est&id=lacinia&massa=nisi&id=venenatis&nisl=tristique&venenatis=fusce&lacinia=congue&aenean=diam&sit=id&amet=ornare&justo=imperdiet&morbi=sapien&ut=urna&odio=pretium&cras=nisl&mi=ut&pede=volutpat&malesuada=sapien&in=arcu&imperdiet=sed",
      "tags": ["Comedy|Horror|Romance", "Drama"]
    },
    {
      "id": "88e68592-314c-4861-abab-a02aed937d32",
      "title": "Failure to Launch",
      "year": 2004,
      "cover": "http://dummyimage.com/243x128.png/cc0000/ffffff",
      "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "duration": 346,
      "contentRating": "PG-13",
      "source": "https://washingtonpost.com/vitae/nisl/aenean.html?aenean=interdum&fermentum=venenatis&donec=turpis&ut=enim&mauris=blandit&eget=mi&massa=in&tempor=porttitor&convallis=pede&nulla=justo&neque=eu&libero=massa&convallis=donec&eget=dapibus&eleifend=duis&luctus=at&ultricies=velit&eu=eu&nibh=est&quisque=congue&id=elementum&justo=in&sit=hac&amet=habitasse&sapien=platea&dignissim=dictumst&vestibulum=morbi&vestibulum=vestibulum&ante=velit&ipsum=id&primis=pretium&in=iaculis&faucibus=diam&orci=erat&luctus=fermentum&et=justo&ultrices=nec&posuere=condimentum&cubilia=neque&curae=sapien&nulla=placerat&dapibus=ante&dolor=nulla&vel=justo&est=aliquam&donec=quis&odio=turpis&justo=eget&sollicitudin=elit&ut=sodales&suscipit=scelerisque&a=mauris&feugiat=sit&et=amet&eros=eros&vestibulum=suspendisse",
      "tags": [
        "Comedy|Drama",
        "Action|Adventure|Crime|Thriller",
        "Fantasy|Horror|Sci-Fi",
        "Drama"
      ]
    },
    {
      "id": "7d413377-15ca-4435-b225-af48adfafbf3",
      "title": "Night at the Museum: Secret of the Tomb",
      "year": 2005,
      "cover": "http://dummyimage.com/212x238.bmp/dddddd/000000",
      "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "duration": 314,
      "contentRating": "PG-13",
      "source": "https://blinklist.com/aliquet/maecenas/leo/odio/condimentum/id.json?nisi=lobortis&eu=convallis&orci=tortor&mauris=risus&lacinia=dapibus&sapien=augue&quis=vel&libero=accumsan&nullam=tellus&sit=nisi&amet=eu&turpis=orci&elementum=mauris&ligula=lacinia&vehicula=sapien&consequat=quis&morbi=libero&a=nullam&ipsum=sit&integer=amet&a=turpis&nibh=elementum&in=ligula&quis=vehicula&justo=consequat&maecenas=morbi&rhoncus=a&aliquam=ipsum&lacus=integer&morbi=a&quis=nibh&tortor=in&id=quis&nulla=justo&ultrices=maecenas&aliquet=rhoncus&maecenas=aliquam&leo=lacus&odio=morbi&condimentum=quis&id=tortor&luctus=id&nec=nulla&molestie=ultrices&sed=aliquet&justo=maecenas&pellentesque=leo&viverra=odio&pede=condimentum&ac=id&diam=luctus&cras=nec&pellentesque=molestie&volutpat=sed&dui=justo&maecenas=pellentesque&tristique=viverra&est=pede&et=ac&tempus=diam&semper=cras&est=pellentesque&quam=volutpat&pharetra=dui&magna=maecenas&ac=tristique&consequat=est",
      "tags": ["Documentary"]
    }
]

module.exports = { moviesMock };  
  