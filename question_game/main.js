import { art_box } from "./art_box.js";
let mArtBox = art_box();

const m_asset_path = 'assets/svg';
let mGameRenderer = (data = {}, mDOM) => {
    //create element..    
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv);
    //your root element [----mDiv----]

    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });

    let mScene = mArtBox_evnt.get_scene();

    console.log(mScene);


    //-----do your code-----//
    //utils..
    let mUtils = {
    };

    // mArtBox_evnt.add_animation({
    //     "e":mScene,
    //     "type":"animate__bounce"
    // });

    //--my-code--//
    let myCODE = {

    };

    //-----do your code-----//
    //utils..
    // let mUtils = {
    //     "my_elem_1": (mE) => {
    //         let mCard = document.createElement("div");
    //         mE.appendChild(mCard);
    //         //set..
    //         mCard.style.width = "10vh";
    //         mCard.style.height = "20vh";
    //         mCard.style.backgroundColor = "green";
    //         return mCard;
    //     },

    // };

    //mDta_main

    let mDta_main = {
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..


                    //screen 1
                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["el"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["el"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;

                            //set..
                            let mSet = (mE = document.body) => {

                                // set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `97vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/MacBook.svg`
                                });
                                mArtBox_evnt.add_svg({
                                    "w": `48vh`,
                                    "h": `57vh`,
                                    "x": 39,
                                    "y": 23,
                                    "e": mE,
                                    "src": `${m_asset_path}/Group4.svg`
                                },

                                );
                                mArtBox_evnt.add_svg({
                                    "w": `50vw`,
                                    "h": `10vh`,
                                    "x": 27,
                                    "y": 84,
                                    "e": mE,
                                    "src": `${m_asset_path}/Rectangle2.svg`
                                },

                                );
                                mArtBox_evnt.add_svg({
                                    "w": `10vh`,
                                    "h": `10vh`,
                                    "x": 37, //45.5
                                    "y": 35, //37.5
                                    "e": mE,
                                    "src": `${m_asset_path}/Group2.svg`
                                },
                                    {
                                        "onLoad": (v = {}) => {

                                            setTimeout(() => {
                                                // Basic animation using Anime.js
                                                var tl = anime.timeline({
                                                    easing: 'easeOutExpo',
                                                    duration: 2000

                                                });

                                                // Add children
                                                tl
                                                    .add({
                                                        targets: v.e,
                                                        translateY: "365",
                                                    })
                                                    .add({ // Add opacity animation after the translation animation
                                                        targets: v.e,
                                                        opacity: 0,
                                                        duration: 500, // Set the duration for the opacity animation
                                                        complete: function (anim) {
                                                            // When the opacity animation completes, you can add any additional actions here
                                                            v.e.style.visibility = "hidden"; // Optionally, hide the element
                                                        }
                                                    });

                                            }, 500);


                                        }
                                    }
                                );
                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `50vw`,
                                        "h": `10vh`,
                                        "x": 27,
                                        "y": 84,
                                        "e": mE,
                                        "src": `${m_asset_path}/Rectangle3.svg`
                                    },
                                        {
                                            "onLoad": (v = {}) => {
                                                mArtBox_evnt.add_svg({
                                                    "w": `4.5vw`,
                                                    "h": `7vh`,
                                                    "x": 46,
                                                    "y": 85.5,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/Frame2.svg`
                                                },

                                                );

                                            }
                                        }
                                    );
                                }, 1500);
                                mArtBox_evnt.add_svg({
                                    "w": `10vh`,
                                    "h": `10vh`,
                                    "x": 59.2, //45.5
                                    "y": 35, //37.5
                                    "e": mE,
                                    "src": `${m_asset_path}/Group2.svg`
                                },
                                    {
                                        "onLoad": (v = {}) => {

                                            setTimeout(() => {
                                                // Basic animation using Anime.js
                                                var tl = anime.timeline({
                                                    easing: 'easeOutExpo',
                                                    duration: 2000

                                                });

                                                // Add children
                                                tl
                                                    .add({
                                                        targets: v.e,
                                                        translateY: "365",
                                                    })
                                                    .add({ // Add opacity animation after the translation animation
                                                        targets: v.e,
                                                        opacity: 0,
                                                        duration: 500, // Set the duration for the opacity animation
                                                        complete: function (anim) {
                                                            // When the opacity animation completes, you can add any additional actions here
                                                            v.e.style.visibility = "hidden"; // Optionally, hide the element
                                                        }
                                                    });

                                            }, 2000);


                                        }
                                    }
                                );
                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `50vw`,
                                        "h": `10vh`,
                                        "x": 27,
                                        "y": 84,
                                        "e": mE,
                                        "src": `${m_asset_path}/Rectangle8.svg`
                                    },
                                        {
                                            "onLoad": (v = {}) => {
                                                mArtBox_evnt.add_svg({
                                                    "w": `9vw`,
                                                    "h": `7vh`,
                                                    "x": 46,
                                                    "y": 85.5,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/Frame3.svg`
                                                }, {
                                                    "onLoad": (v = {}) => {
                                                        var tl = anime.timeline({
                                                            easing: 'easeOutExpo',
                                                            duration: 1500

                                                        });

                                                        // Add children
                                                        tl
                                                            .add({
                                                                targets: v.e,
                                                                complete: function (anim) {
                                                                    anime.remove(v.e);
                                                                    //completeLogEl.value = 'completed : ' + anim.completed;
                                                                    on_scr_end();
                                                                }
                                                            })

                                                    }
                                                }
                                                );

                                            }
                                        }
                                    );
                                }, 3300);

                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});

                                            }
                                        },
                                    });
                                };

                            };

                            mSet(mScr);
                        }
                    },


                    //screen 2
                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["el"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["el"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;

                            //set..
                            let mSet = (mE = document.body) => {

                                //set..[Svg]..background  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `97vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/MacBook Pro 16_ - 13.svg`
                                });

                                //set..[Svg].. egg image
                                mArtBox_evnt.add_svg({
                                    "w": `48vh`,
                                    "h": `57vh`,
                                    "x": 39,
                                    "y": 23,
                                    "e": mE,
                                    "src": `${m_asset_path}/Group 4.svg`
                                }
                                    , {
                                        "onLoad": (v = {}) => {
                                            //set..
                                            // console.log(v.e);


                                            //left to right animation
                                            setTimeout(() => {
                                                // Basic animation using Anime.js
                                                // var tl = anime.timeline({
                                                //     easing: 'easeOutExpo',
                                                //     duration: 2000
                                                // });

                                                // // Add children
                                                // tl
                                                //     .add({
                                                //         targets: v.e,
                                                //         translateX: "75vw"
                                                //     })
                                            }, 1000);



                                        }
                                    }
                                );

                                //set..[Svg]..question box
                                mArtBox_evnt.add_svg({
                                    "w": `80vw`,
                                    "h": `13vh`,
                                    "x": 10,
                                    "y": 3,
                                    "e": mE,
                                    "src": `${m_asset_path}/Rectangle 1.svg`
                                }
                                    , {
                                        "onLoad": (v = {}) => {
                                            //set..
                                            // Basic animation using Anime.js
                                            var tl = anime.timeline({
                                                easing: 'easeInExpo',
                                                duration: 500
                                            });
                                            // Add children
                                            tl.add({
                                                targets: v.e,
                                                opacity: [0, 1]
                                            })
                                            setTimeout(() => {
                                                mArtBox_evnt.add_svg({
                                                    "w": `45vw`,
                                                    "h": `8vh`,
                                                    "x": 28,
                                                    "y": 5.5,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/_The sun set over the tranquil ocean, casting a warm, golden glow across the horizon._.svg`
                                                });

                                                mArtBox_evnt.add_svg({
                                                    "w": `10vh`,
                                                    "h": `10vh`,
                                                    "x": 37.2,
                                                    "y": 33,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/Group 1.svg`
                                                });

                                                mArtBox_evnt.add_svg({
                                                    "w": `10vh`,
                                                    "h": `10vh`,
                                                    "x": 58.35,
                                                    "y": 33,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/Group 2.svg`
                                                });

                                                mArtBox_evnt.add_svg({
                                                    "w": `40vw`,
                                                    "h": `8vh`,
                                                    "x": 30,
                                                    "y": 83,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/Rectangle 1.svg`
                                                });

                                                mArtBox_evnt.add_svg({
                                                    "w": `5vh`,
                                                    "h": `5vh`,
                                                    "x": 66,
                                                    "y": 84.5,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/vector.svg`
                                                }, {
                                                    "onClick": (v = {}) => {
                                                        on_scr_end();
                                                    }
                                                }

                                                );
                                            }, 400);
                                        }

                                    }
                                );

                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});

                                            }
                                        },
                                    });
                                };

                            };

                            mSet(mScr);
                        }
                    },

                    //screen 3
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["el"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["el"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;

                            //set..
                            let mSet = (mE = document.body) => {

                                //set..[Svg]..background  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `97vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/MacBook Pro 16_ - 13.svg`
                                });

                                //set..[Svg].. egg image
                                mArtBox_evnt.add_svg({
                                    "w": `48vh`,
                                    "h": `57vh`,
                                    "x": 39,
                                    "y": 23,
                                    "e": mE,
                                    "src": `${m_asset_path}/Group 4.svg`
                                }
                                    , {
                                        "onLoad": (v = {}) => {
                                            //set..
                                            // console.log(v.e);


                                            //left to right animation
                                            setTimeout(() => {
                                                // Basic animation using Anime.js
                                                // var tl = anime.timeline({
                                                //     easing: 'easeOutExpo',
                                                //     duration: 2000
                                                // });

                                                // // Add children
                                                // tl
                                                //     .add({
                                                //         targets: v.e,
                                                //         translateX: "75vw"
                                                //     })
                                            }, 1000);



                                        }
                                    }
                                );

                                //set..[Svg]..question box
                                mArtBox_evnt.add_svg({
                                    "w": `80vw`,
                                    "h": `13vh`,
                                    "x": 10,
                                    "y": 3,
                                    "e": mE,
                                    "src": `${m_asset_path}/Rectangle 1.svg`
                                }
                                    , {
                                        "onLoad": (v = {}) => {


                                            mArtBox_evnt.add_svg({
                                                "w": `45vw`,
                                                "h": `8vh`,
                                                "x": 28,
                                                "y": 5.5,
                                                "e": mE,
                                                "src": `${m_asset_path}/_The sun set over the tranquil ocean, casting a warm, golden glow across the horizon._.svg`
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `10vh`,
                                                "h": `10vh`,
                                                "x": 37.2,
                                                "y": 33,
                                                "e": mE,
                                                "src": `${m_asset_path}/Group 1.svg`
                                            },{
                                                "onLoad": (v = {}) => {
                                                    //set..
                                                    // console.log(v.e);
        
        
                                                    //left to right animation
                                                    setTimeout(() => {
                                                        // Basic animation using Anime.js
                                                        var tl = anime.timeline({
                                                            easing: 'easeOutExpo',
                                                            duration: 2000
                                                        });
        
                                                        // Add children
                                                        tl
                                                            .add({
                                                                targets: v.e,
                                                                translateX: "-18vw",
                                                                translateY: "16vh",
                                                                complete: function (anim) {
                                                                    // When the opacity animation completes, you can add any additional actions here
                                                                    v.e.style.visibility = "hidden"; // Optionally, hide the element
                                                                }
                                                            })
                                                            mArtBox_evnt.add_svg({
                                                                "w": `45vh`,
                                                                "h": `45vh`,
                                                                "x": 10,
                                                                "y": 28,
                                                                "e": mE,
                                                                "src": `${m_asset_path}/Group.svg`
                                                            },{
                                                                "onLoad": (v = {}) => {
                                                                    //set..
                                                                    // console.log(v.e);
                        
                        
                                                                    //left to right animation
                                                                    v.e.style.visibility="hidden"
                                                                    setTimeout(() => {
                                                                        // Basic animation using Anime.js
                                                                        // var tl = anime.timeline({
                                                                        //     easing: 'easeOutExpo',
                                                                        //     duration: 2000
                                                                        // });
                        
                                                                        // // Add children
                                                                        // tl
                                                                        //     .add({
                                                                        //         targets: v.e,
                                                                        //         translateX: "75vw"
                                                                        //     })
                                                                        
                                                                        v.e.style.visibility="visible"

                                                                        setTimeout(()=>{
                                                                            mArtBox_evnt.add_svg({
                                                                                "w": `10vh`,
                                                                                "h": `7vh`,
                                                                                "x": 18,
                                                                                "y": 30,
                                                                                "e": mE,
                                                                                "src": `${m_asset_path}/My Answer.svg`
                                                                            });
                                                                            mArtBox_evnt.add_svg({
                                                                                "w": `25vh`,
                                                                                "h": `15vh`,
                                                                                "x": 15,
                                                                                "y": 45,
                                                                                "e": mE,
                                                                                "src": `${m_asset_path}/The setting sun over the tranquil ocean casts a warm, golden glow on the horizon..svg`
                                                                            })
                                                                        },1000)

                                                                    }, 1600);
                                                                    
                                                                }
                                                            }
                                                            );
                                                    }, 3000);
                                                    
                                                    
                                                }
                                                
                                            }
                                            );

                                            mArtBox_evnt.add_svg({
                                                "w": `10vh`,
                                                "h": `10vh`,
                                                "x": 58.35,
                                                "y": 33,
                                                "e": mE,
                                                "src": `${m_asset_path}/Group 2.svg`
                                            },{
                                                "onLoad": (v = {}) => {
                                                     var tl = anime.timeline({
                                                    easing: 'easeOutExpo',
                                                    duration: 2000
                                                });

                                                // Add children
                                                tl
                                                    .add({
                                                        targets: v.e,
                                                        translateX: "18vw",
                                                        translateY: "16vh",
                                                        complete: function (anim) {
                                                            v.e.style.visibility = "hidden"; // Optionally, hide the element
                                                        }

                                                    })

                                                    mArtBox_evnt.add_svg({
                                                        "w": `45vh`,
                                                        "h": `45vh`,
                                                        "x": 68,
                                                        "y": 28,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/Group.svg`
                                                    },{
                                                        "onLoad": (v = {}) => {
                                                             
                                                           
                                                            
                                                            // Add translation animation
                                                            v.e.style.visibility='hidden'
                                                            setTimeout(() => {
                                                                v.e.style.visibility='visible'
                                                               setTimeout(() => {
                                                                mArtBox_evnt.add_svg({
                                                                    "w": `10vh`,
                                                                    "h": `7vh`,
                                                                    "x": 76,
                                                                    "y": 30,
                                                                    "e": mE,
                                                                    "src": `${m_asset_path}/Your Question.svg`
                                                                });
                                                                mArtBox_evnt.add_svg({
                                                                    "w": `25vh`,
                                                                    "h": `15vh`,
                                                                    "x": 72.5,
                                                                    "y": 45,
                                                                    "e": mE,
                                                                    "src": `${m_asset_path}/What does the setting sun cast across the horizon when it sets over the tranquil ocean_.svg`
                                                                });
                                                               }, 1000);
                                                               
                                                            }, 1600);


                                                        }
                                                    }
                                                    );
                                                    
                                                } 
    
                                            }
                                            );

                                            mArtBox_evnt.add_svg({
                                                "w": `40vw`,
                                                "h": `8vh`,
                                                "x": 30,
                                                "y": 83,
                                                "e": mE,
                                                "src": `${m_asset_path}/Rectangle 1.svg`
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `5vh`,
                                                "h": `5vh`,
                                                "x": 66,
                                                "y": 84.5,
                                                "e": mE,
                                                "src": `${m_asset_path}/vector.svg`
                                            }, {
                                                "onClick": (v = {}) => {
                                                    //    on_scr_end();
                                                }
                                            }

                                            );

                                        }

                                    }
                                );

                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});

                                            }
                                        },
                                    });
                                };

                            };

                            mSet(mScr);
                        }
                    },


                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    let scr_3 = () => {
        mDta_main.screens.set("scr_3", {
            "el": document.body,
            "value": {
                // "cb": {
                //     "on_scr_end": (p = {}) => {
                //         scr_3();
                //     },
                // }
            }
        });
    }


    let scr_2 = () => {
        mDta_main.screens.set("scr_2", {
            "el": document.body,
            "value": {
                "cb": {
                    "on_scr_end": (p = {}) => {
                        scr_3();
                    },
                }
            }
        });
    }


    //mStart..
    let mStart = (mE) => {
        // set..
        mDta_main.screens.set("scr_1", {
            "el": mE,
            "value": {
                //here you can assign your variable based on your requirements..
                "cb": {
                    "on_scr_end": (p = {}) => {

                         scr_2();
                    },
                }

            }
        });
    };
    mStart(mScene);


};

//  //mGameRendrer..
//  let mStart = () => {
//     mGameRenderer({
//     "meta": {},
//     "data": {
//       //add params based on content requirement
//       "my_param_1": "",
//       "my_param_2": "",

//     }
//    }, document.body); //document.body [YOUR ELEMENT]

//     };

//     mStart();

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",


    }
}, document.body);




