(function (b) {
    var l = {};
    b.fn.fontselect = function (k) {
        var g = function (b, a) {
                return function () {
                    return b.apply(a, arguments);
                };
            },
            m = {
                style: "font-select",
                placeholder: "Select a font",
                placeholderSearch: "Search...",
                searchable: !0,
                lookahead: 2,
                googleApi: "https://fonts.googleapis.com/css?family=",
                localFontsUrl: "/fonts/",
                systemFonts: "Arial Helvetica+Neue Courier+New Times+New+Roman Comic+Sans+MS Verdana Impact".split(" "),
                googleFonts: "ABeeZee Abel Abhaya+Libre Abril+Fatface Aclonica Acme Actor Adamina Advent+Pro Aguafina+Script Akronim Aladin Alata Alatsi Aldrich Alef Alegreya Alegreya+Sans Alegreya+Sans+SC Alegreya+SC Aleo Alex+Brush Alfa+Slab+One Alice Alike Alike+Angular Allan Allerta Allerta+Stencil Allura Almarai Almendra Almendra+Display Almendra+SC Amarante Amaranth Amatic+SC Amethysta Amiko Amiri Amita Anaheim Andada Andika Angkor Annie+Use+Your+Telescope Anonymous+Pro Antic Antic+Didone Antic+Slab Anton Arapey Arbutus Arbutus+Slab Architects+Daughter Archivo Archivo+Black Archivo+Narrow Aref+Ruqaa Arima+Madurai Arimo Arizonia Armata Arsenal Artifika Arvo Arya Asap Asap+Condensed Asar Asset Assistant Astloch Asul Athiti Atma Atomic+Age Aubrey Audiowide Autour+One Average Average+Sans Averia+Gruesa+Libre Averia+Libre Averia+Sans+Libre Averia+Serif+Libre B612 B612+Mono Bad+Script Bahiana Bahianita Bai+Jamjuree Baloo Baloo+Bhai Baloo+Bhaijaan Baloo+Bhaina Baloo+Chettan Baloo+Da Baloo+Paaji Baloo+Tamma Baloo+Tammudu Baloo+Thambi Balthazar Bangers Barlow Barlow+Condensed Barlow+Semi+Condensed Barriecito Barrio Basic Baskervville Battambang Baumans Bayon Be+Vietnam Bebas+Neue Belgrano Bellefair Belleza BenchNine Bentham Berkshire+Swash Beth+Ellen Bevan Big+Shoulders+Display Big+Shoulders+Text Bigelow+Rules Bigshot+One Bilbo Bilbo+Swash+Caps BioRhyme BioRhyme+Expanded Biryani Bitter Black+And+White+Picture Black+Han+Sans Black+Ops+One Blinker Bokor Bonbon Boogaloo Bowlby+One Bowlby+One+SC Brawler Bree+Serif Bubblegum+Sans Bubbler+One Buda Buenard Bungee Bungee+Hairline Bungee+Inline Bungee+Outline Bungee+Shade Butcherman Butterfly+Kids Cabin Cabin+Condensed Cabin+Sketch Caesar+Dressing Cagliostro Cairo Calistoga Calligraffitti Cambay Cambo Candal Cantarell Cantata+One Cantora+One Capriola Cardo Carme Carrois+Gothic Carrois+Gothic+SC Carter+One Catamaran Caudex Caveat Caveat+Brush Cedarville+Cursive Ceviche+One Chakra+Petch Changa Changa+One Chango Charm Charmonman Chathura Chau+Philomene+One Chela+One Chelsea+Market Chenla Cherry+Cream+Soda Cherry+Swash Chewy Chicle Chilanka Chivo Chonburi Cinzel Cinzel+Decorative Clicker+Script Coda Coda+Caption Codystar Coiny Combo Comfortaa Coming+Soon Concert+One Condiment Content Contrail+One Convergence Cookie Copse Corben Cormorant Cormorant+Garamond Cormorant+Infant Cormorant+SC Cormorant+Unicase Cormorant+Upright Courgette Courier+Prime Cousine Coustard Covered+By+Your+Grace Crafty+Girls Creepster Crete+Round Crimson+Pro Crimson+Text Croissant+One Crushed Cuprum Cute+Font Cutive Cutive+Mono Damion Dancing+Script Dangrek Darker+Grotesque David+Libre Dawning+of+a+New+Day Days+One Dekko Delius Delius+Swash+Caps Delius+Unicase Della+Respira Denk+One Devonshire Dhurjati Didact+Gothic Diplomata Diplomata+SC DM+Sans DM+Serif+Display DM+Serif+Text Do+Hyeon Dokdo Domine Donegal+One Doppio+One Dorsa Dosis Dr+Sugiyama Duru+Sans Dynalight Eagle+Lake East+Sea+Dokdo Eater EB+Garamond Economica Eczar El+Messiri Electrolize Elsie Elsie+Swash+Caps Emblema+One Emilys+Candy Encode+Sans Encode+Sans+Condensed Encode+Sans+Expanded Encode+Sans+Semi+Condensed Encode+Sans+Semi+Expanded Engagement Englebert Enriqueta Erica+One Esteban Euphoria+Script Ewert Exo Exo+2 Expletus+Sans Fahkwang Fanwood+Text Farro Farsan Fascinate Fascinate+Inline Faster+One Fasthand Fauna+One Faustina Federant Federo Felipa Fenix Finger+Paint Fira+Code Fira+Mono Fira+Sans Fira+Sans+Condensed Fira+Sans+Extra+Condensed Fjalla+One Fjord+One Flamenco Flavors Fondamento Fontdiner+Swanky Forum Francois+One Frank+Ruhl+Libre Freckle+Face Fredericka+the+Great Fredoka+One Freehand Fresca Frijole Fruktur Fugaz+One Gabriela Gaegu Gafata Galada Galdeano Galindo Gamja+Flower Gayathri Gelasio Gentium+Basic Gentium+Book+Basic Geo Geostar Geostar+Fill Germania+One GFS+Didot GFS+Neohellenic Gidugu Gilda+Display Girassol Give+You+Glory Glass+Antiqua Glegoo Gloria+Hallelujah Goblin+One Gochi+Hand Gorditas Gothic+A1 Goudy+Bookletter+1911 Graduate Grand+Hotel Gravitas+One Great+Vibes Grenze Griffy Gruppo Gudea Gugi Gupter Gurajada Habibi Halant Hammersmith+One Hanalei Hanalei+Fill Handlee Hanuman Happy+Monkey Harmattan Headland+One Heebo Henny+Penny Hepta+Slab Herr+Von+Muellerhoff Hi+Melody Hind Hind+Guntur Hind+Madurai Hind+Siliguri Hind+Vadodara Holtwood+One+SC Homemade+Apple Homenaje Ibarra+Real+Nova IBM+Plex+Mono IBM+Plex+Sans IBM+Plex+Sans+Condensed IBM+Plex+Serif Iceberg Iceland IM+Fell+Double+Pica IM+Fell+Double+Pica+SC IM+Fell+DW+Pica IM+Fell+DW+Pica+SC IM+Fell+English IM+Fell+English+SC IM+Fell+French+Canon IM+Fell+French+Canon+SC IM+Fell+Great+Primer IM+Fell+Great+Primer+SC Imprima Inconsolata Inder Indie+Flower Inika Inknut+Antiqua Inria+Serif Irish+Grover Istok+Web Italiana Italianno Itim Jacques+Francois Jacques+Francois+Shadow Jaldi Jim+Nightshade Jockey+One Jolly+Lodger Jomhuria Jomolhari Josefin+Sans Josefin+Slab Joti+One Jua Judson Julee Julius+Sans+One Junge Jura Just+Another+Hand Just+Me+Again+Down+Here K2D Kadwa Kalam Kameron Kanit Kantumruy Karla Karma Katibeh Kaushan+Script Kavivanar Kavoon Kdam+Thmor Keania+One Kelly+Slab Kenia Khand Khmer Khula Kirang+Haerang Kite+One Knewave Kodchasan KoHo Kosugi Kosugi+Maru Kotta+One Koulen Kranky Kreon Kristi Krona+One Krub Kulim+Park Kumar+One Kumar+One+Outline Kurale La+Belle+Aurore Lacquer Laila Lakki+Reddy Lalezar Lancelot Lateef Lato League+Script Leckerli+One Ledger Lekton Lemon Lemonada Lexend+Deca Lexend+Exa Lexend+Giga Lexend+Mega Lexend+Peta Lexend+Tera Lexend+Zetta Libre+Barcode+128 Libre+Barcode+128+Text Libre+Barcode+39 Libre+Barcode+39+Extended Libre+Barcode+39+Extended+Text Libre+Barcode+39+Text Libre+Baskerville Libre+Caslon+Display Libre+Caslon+Text Libre+Franklin Life+Savers Lilita+One Lily+Script+One Limelight Linden+Hill Literata Liu+Jian+Mao+Cao Livvic Lobster Lobster+Two Londrina+Outline Londrina+Shadow Londrina+Sketch Londrina+Solid Long+Cang Lora Love+Ya+Like+A+Sister Loved+by+the+King Lovers+Quarrel Luckiest+Guy Lusitana Lustria M+PLUS+1p M+PLUS+Rounded+1c Ma+Shan+Zheng Macondo Macondo+Swash+Caps Mada Magra Maiden+Orange Maitree Major+Mono+Display Mako Mali Mallanna Mandali Manjari Mansalva Manuale Marcellus Marcellus+SC Marck+Script Margarine Markazi+Text Marko+One Marmelad Martel Martel+Sans Marvel Mate Mate+SC Maven+Pro McLaren Meddon MedievalSharp Medula+One Meera+Inimai Megrim Meie+Script Merienda Merienda+One Merriweather Merriweather+Sans Metal Metal+Mania Metamorphous Metrophobic Michroma Milonga Miltonian Miltonian+Tattoo Mina Miniver Miriam+Libre Mirza Miss+Fajardose Mitr Modak Modern+Antiqua Mogra Molengo Molle Monda Monofett Monoton Monsieur+La+Doulaise Montaga Montez Montserrat Montserrat+Alternates Montserrat+Subrayada Moul Moulpali Mountains+of+Christmas Mouse+Memoirs Mr+Bedfort Mr+Dafoe Mr+De+Haviland Mrs+Saint+Delafield Mrs+Sheppards Mukta Mukta+Mahee Mukta+Malar Mukta+Vaani Muli Mystery+Quest Nanum+Brush+Script Nanum+Gothic Nanum+Gothic+Coding Nanum+Myeongjo Nanum+Pen+Script Neucha Neuton New+Rocker News+Cycle Niconne Niramit Nixie+One Nobile Nokora Norican Nosifer Notable Nothing+You+Could+Do Noticia+Text Noto+Sans Noto+Sans+HK Noto+Sans+JP Noto+Sans+KR Noto+Sans+SC Noto+Sans+TC Noto+Serif Noto+Serif+JP Noto+Serif+KR Noto+Serif+SC Noto+Serif+TC Nova+Cut Nova+Flat Nova+Mono Nova+Oval Nova+Round Nova+Script Nova+Slim Nova+Square NTR Numans Nunito Nunito+Sans Odibee+Sans Odor+Mean+Chey Offside Old+Standard+TT Oldenburg Oleo+Script Oleo+Script+Swash+Caps Open+Sans:300 Open+Sans Open+Sans:600 Open+Sans:800 Open+Sans+Condensed:300 Oranienbaum Orbitron Oregano Orienta Original+Surfer Oswald Over+the+Rainbow Overlock Overlock+SC Overpass Overpass+Mono Ovo Oxygen Oxygen+Mono Pacifico Padauk Palanquin Palanquin+Dark Pangolin Paprika Parisienne Passero+One Passion+One Pathway+Gothic+One Patrick+Hand Patrick+Hand+SC Pattaya Patua+One Pavanam Paytone+One Peddana Peralta Permanent+Marker Petit+Formal+Script Petrona Philosopher Piedra Pinyon+Script Pirata+One Plaster Play Playball Playfair+Display Playfair+Display+SC Podkova Poiret+One Poller+One Poly Pompiere Pontano+Sans Poor+Story Poppins Port+Lligat+Sans Port+Lligat+Slab Pragati+Narrow Prata Preahvihear Press+Start+2P Pridi Princess+Sofia Prociono Prompt Prosto+One Proza+Libre PT+Mono PT+Sans PT+Sans+Caption PT+Sans+Narrow PT+Serif PT+Serif+Caption Public+Sans Puritan Purple+Purse Quando Quantico Quattrocento Quattrocento+Sans Questrial Quicksand Quintessential Qwigley Racing+Sans+One Radley Rajdhani Rakkas Raleway Raleway+Dots Ramabhadra Ramaraja Rambla Rammetto+One Ranchers Rancho Ranga Rasa Rationale Ravi+Prakash Red+Hat+Display Red+Hat+Text Redressed Reem+Kufi Reenie+Beanie Revalia Rhodium+Libre Ribeye Ribeye+Marrow Righteous Risque Roboto Roboto+Condensed Roboto+Mono Roboto+Slab Rochester Rock+Salt Rokkitt Romanesco Ropa+Sans Rosario Rosarivo Rouge+Script Rozha+One Rubik Rubik+Mono+One Ruda Rufina Ruge+Boogie Ruluko Rum+Raisin Ruslan+Display Russo+One Ruthie Rye Sacramento Sahitya Sail Saira Saira+Condensed Saira+Extra+Condensed Saira+Semi+Condensed Saira+Stencil+One Salsa Sanchez Sancreek Sansita Sarabun Sarala Sarina Sarpanch Satisfy Sawarabi+Gothic Sawarabi+Mincho Scada Scheherazade Schoolbell Scope+One Seaweed+Script Secular+One Sedgwick+Ave Sedgwick+Ave+Display Sevillana Seymour+One Shadows+Into+Light Shadows+Into+Light+Two Shanti Share Share+Tech Share+Tech+Mono Shojumaru Short+Stack Shrikhand Siemreap Sigmar+One Signika Signika+Negative Simonetta Single+Day Sintony Sirin+Stencil Six+Caps Skranji Slabo+13px Slabo+27px Slackey Smokum Smythe Sniglet Snippet Snowburst+One Sofadi+One Sofia Solway Song+Myung Sonsie+One Sorts+Mill+Goudy Source+Code+Pro Source+Sans+Pro Source+Serif+Pro Space+Mono Special+Elite Spectral Spectral+SC Spicy+Rice Spinnaker Spirax Squada+One Sree+Krushnadevaraya Sriracha Srisakdi Staatliches Stalemate Stalinist+One Stardos+Stencil Stint+Ultra+Condensed Stint+Ultra+Expanded Stoke Strait Stylish Sue+Ellen+Francisco Suez+One Sulphur+Point Sumana Sunflower Sunshiney Supermercado+One Sura Suranna Suravaram Suwannaphum Swanky+and+Moo+Moo Syncopate Tajawal Tangerine Taprom Tauri Taviraj Teko Telex Tenali+Ramakrishna Tenor+Sans Text+Me+One Thasadith The+Girl+Next+Door Tienne Tillana Timmana Tinos Titan+One Titillium+Web Tomorrow Trade+Winds Trirong Trocchi Trochut Trykker Tulpen+One Turret+Road Ubuntu Ubuntu+Condensed Ubuntu+Mono Ultra Uncial+Antiqua Underdog Unica+One UnifrakturCook UnifrakturMaguntia Unkempt Unlock Unna Vampiro+One Varela Varela+Round Vast+Shadow Vesper+Libre Vibes Vibur Vidaloka Viga Voces Volkhov Vollkorn Vollkorn+SC Voltaire VT323 Waiting+for+the+Sunrise Wallpoet Walter+Turncoat Warnes Wellfleet Wendy+One Wire+One Work+Sans Yanone+Kaffeesatz Yantramanav Yatra+One Yellowtail Yeon+Sung Yeseva+One Yesteryear Yrsa ZCOOL+KuaiLe ZCOOL+QingKe+HuangYou ZCOOL+XiaoWei Zeyada Zhi+Mang+Xing Zilla+Slab Zilla+Slab+Highlight".split(
                    " "
                ),
            },
            n = (function () {
                function k(a, c) {
                    c.systemFonts || (c.systemFonts = []);
                    c.localFonts || (c.localFonts = []);
                    c.googleFonts || (c.googleFonts = []);
                    this.options = c;
                    this.$original = b(a);
                    this.setupHtml();
                    this.getVisibleFonts();
                    this.bindEvents();
                    this.query = "";
                    this.keyActive = !1;
                    this.searchBoxHeight = 0;
                    if ((a = this.$original.val())) this.updateSelected(), this.addFontLink(a);
                }
                k.prototype = {
                    keyDown: function (a) {
                        function c(a) {
                            a.preventDefault();
                            a.stopPropagation();
                        }
                        this.keyActive = !0;
                        if (27 == a.keyCode) c(a), this.toggleDropdown("hide");
                        else if (38 == a.keyCode) {
                            c(a);
                            a = b("li.active", this.$results);
                            var e = a.prev("li");
                            0 < e.length && (a.removeClass("active"), this.$results.scrollTop(e.addClass("active")[0].offsetTop - this.searchBoxHeight));
                        } else
                            40 == a.keyCode
                                ? (c(a), (a = b("li.active", this.$results)), (e = a.next("li")), 0 < e.length && (a.removeClass("active"), this.$results.scrollTop(e.addClass("active")[0].offsetTop - this.searchBoxHeight)))
                                : 13 == a.keyCode
                                ? (c(a), b("li.active", this.$results).trigger("click"))
                                : ((this.query += String.fromCharCode(a.keyCode).toLowerCase()),
                                  (a = b("li[data-query^='" + this.query + "']").first()),
                                  0 < a.length && (b("li.active", this.$results).removeClass("active"), this.$results.scrollTop(a.addClass("active")[0].offsetTop)));
                    },
                    keyUp: function (a) {
                        this.keyActive = !1;
                    },
                    bindEvents: function () {
                        var a = this;
                        b("li", this.$results).click(g(this.selectFont, this)).mouseover(g(this.activateFont, this));
                        this.$select.click(
                            g(function () {
                                a.toggleDropdown("show");
                            }, this)
                        );
                        this.$original.on("setFont", function (c, e, d) {
                            d = d || 400;
                            c = e.replace(/ /g, "+") + (400 == d ? "" : ":" + d);
                            d = b("li[data-value='" + c + "']", a.$results);
                            0 == d.length && (c = e.replace(/ /g, "+"));
                            d = b("li[data-value='" + c + "']", a.$results);
                            b("li.active", a.$results).removeClass("active");
                            d.addClass("active");
                            a.$original.val(c);
                            a.updateSelected();
                            a.addFontLink(d.data("value"));
                        });
                        this.$original.on("change", function () {
                            a.updateSelected();
                            a.addFontLink(b("li.active", a.$results).data("value"));
                        });
                        if (this.options.searchable)
                            this.$input.on("keyup", function () {
                                var c = this.value.toLowerCase();
                                b("li", a.$results).each(function () {
                                    -1 == b(this).text().toLowerCase().indexOf(c) ? b(this).hide() : b(this).show();
                                });
                            });
                        b(document).on("click", function (c) {
                            0 === b(c.target).closest("." + a.options.style).length && a.toggleDropdown("hide");
                        });
                    },
                    toggleDropdown: function (a) {
                        "hide" === a
                            ? (this.$element.off("keydown keyup"), (this.query = ""), (this.keyActive = !1), this.$element.removeClass("font-select-active"), this.$drop.hide(), clearInterval(this.visibleInterval))
                            : (this.$element.on("keydown", g(this.keyDown, this)),
                              this.$element.on("keyup", g(this.keyUp, this)),
                              this.$element.addClass("font-select-active"),
                              this.$drop.show(),
                              (this.visibleInterval = setInterval(g(this.getVisibleFonts, this), 500)),
                              (this.searchBoxHeight = this.$search.outerHeight()),
                              this.moveToSelected());
                    },
                    selectFont: function () {
                        var a = b("li.active", this.$results).data("value");
                        this.$original.val(a).change();
                        this.updateSelected();
                        this.toggleDropdown("hide");
                    },
                    moveToSelected: function () {
                        var a = this.$original.val().replace(/ /g, "+");
                        a = a ? b("li[data-value='" + a + "']", this.$results) : (a = b("li", this.$results).first());
                        this.$results.scrollTop(a.addClass("active")[0].offsetTop - this.searchBoxHeight);
                    },
                    activateFont: function (a) {
                        this.keyActive || (b("li.active", this.$results).removeClass("active"), b(a.target).addClass("active"));
                    },
                    updateSelected: function () {
                        var a = this.$original.val();
                        b("span", this.$element).text(this.toReadable(a)).css(this.toStyle(a));
                    },
                    setupHtml: function () {
                        this.$original.hide();
                        this.$element = b("<div>", { class: this.options.style });
                        this.$select = b('<span tabindex="0">' + this.options.placeholder + "</span>");
                        this.$search = b("<div>", { class: "fs-search" });
                        this.$input = b("<input>", { type: "text" });
                        this.options.placeholderSearch && this.$input.attr("placeholder", this.options.placeholderSearch);
                        this.$search.append(this.$input);
                        this.$drop = b("<div>", { class: "fs-drop" });
                        this.$results = b("<ul>", { class: "fs-results" });
                        this.$original.after(this.$element.append(this.$select, this.$drop));
                        this.options.searchable && this.$drop.append(this.$search);
                        this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
                    },
                    fontsAsHtml: function () {
                        var a,
                            b = "",
                            e = this.options.systemFonts,
                            d = this.options.localFonts,
                            h = this.options.googleFonts;
                        for (a = 0; a < e.length; a++) {
                            var g = this.toReadable(e[a]);
                            var f = this.toStyle(e[a]);
                            f = "font-family:" + f["font-family"];
                            (0 < d.length || 0 < h.length) && a == e.length - 1 && (f += ";border-bottom:1px solid #444");
                            b += '<li data-value="' + e[a] + '" data-query="' + e[a].toLowerCase() + '" style="' + f + '">' + g + "</li>";
                        }
                        for (a = 0; a < d.length; a++)
                            (g = this.toReadable(d[a])),
                                (f = this.toStyle(d[a])),
                                (f = "font-family:" + f["font-family"]),
                                0 < h.length && a == d.length - 1 && (f += ";border-bottom:1px solid #444"),
                                (b += '<li data-value="' + d[a] + '" data-query="' + d[a].toLowerCase() + '" style="' + f + '">' + g + "</li>");
                        for (a = 0; a < h.length; a++)
                            (g = this.toReadable(h[a])),
                                (f = this.toStyle(h[a])),
                                (f = "font-family:" + f["font-family"] + ";font-weight:" + f["font-weight"]),
                                (b += '<li data-value="' + h[a] + '" data-query="' + h[a].toLowerCase() + '" style="' + f + '">' + g + "</li>");
                        return b;
                    },
                    toReadable: function (a) {
                        return a.replace(/[\+|:]/g, " ");
                    },
                    toStyle: function (a) {
                        a = a.split(":");
                        return { "font-family": "'" + this.toReadable(a[0]) + "'", "font-weight": a[1] || 400 };
                    },
                    getVisibleFonts: function () {
                        if (!this.$results.is(":hidden")) {
                            var a = this,
                                c = this.$results.scrollTop(),
                                e = c + this.$results.height();
                            if (this.options.lookahead) {
                                var d = b("li", this.$results).first().height();
                                e += d * this.options.lookahead;
                            }
                            b("li:visible", this.$results).each(function () {
                                var d = b(this).position().top + c;
                                d + b(this).height() >= c && d <= e && a.addFontLink(b(this).data("value"));
                            });
                        }
                    },
                    addFontLink: function (a) {
                        l[a] ||
                            ((l[a] = !0),
                            -1 < this.options.googleFonts.indexOf(a)
                                ? b("link:last").after('<link href="' + this.options.googleApi + a + '" rel="stylesheet" type="text/css">')
                                : -1 < this.options.localFonts.indexOf(a) &&
                                  ((a = this.toReadable(a)),
                                  b("head").append("<style> @font-face { font-family:'" + a + "'; font-style:normal; font-weight:400; src:local('" + a + "'), url('" + this.options.localFontsUrl + a + ".woff') format('woff'); } </style>")));
                    },
                };
                return k;
            })();
        return this.each(function () {
            k && b.extend(m, k);
            return new n(this, m);
        });
    };
})(jQuery);
