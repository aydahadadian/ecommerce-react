import { ArrowDropDown, ArrowDropUp, Home } from "@material-ui/icons";


export const SidebarData=[

    {
        title: 'HOME',
        path:'/',
       

    },
    {
        title: 'ABOUT US',
        path:'/',
    

    },
    {
        title: 'WOMEN',
        iconClosed: <ArrowDropDown /> ,
        iconOpened: <ArrowDropUp /> ,
        
        subNav:[

            {
                title: 'CLOTHING',
                path: '/products' ,
                
            },
            {
                title: 'SHOES',
                path: '/products' ,
               
            },
            {
                title: 'ACCESSORIES',
                path: '/products' ,
                
            }
           
        ]
    },
    {
        title: 'MEN',
        iconClosed: <ArrowDropDown /> ,
        iconOpened: <ArrowDropUp /> ,
        
        subNav:[

            {
                title: 'CLOTHING',
                path: '/products' ,
                
            },
            {
                title: 'SHOES',
                path: '/products' ,
                
            },
            {
                title: 'ACCESSORIES',
                path: '/products' ,
               
            }
           
        ]
    },
    {
        title: 'GIRLS',
        iconClosed: <ArrowDropDown /> ,
        iconOpened: <ArrowDropUp /> ,
        
        subNav:[

            {
                title: 'CLOTHING',
                path: '/products' ,
              
            },
            {
                title: 'SHOES',
                path: '/products' ,
               
            },
            {
                title: 'ACCESSORIES',
                path: '/products' ,
               
            }
           
        ]
    },
    {
        title: 'BOYS',
        iconClosed: <ArrowDropDown /> ,
        iconOpened: <ArrowDropUp /> ,
        
        subNav:[

            {
                title: 'CLOTHING',
                path: '/products' ,
                
            },
            {
                title: 'SHOES',
                path: '/products' ,
                
            },
            {
                title: 'ACCESSORIES',
                path: '/products' ,
            }
           
        ]
    }
  
]