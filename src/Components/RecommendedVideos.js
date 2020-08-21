import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    return <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div class="recommendedVideos__videos">
            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://cdn3.f-cdn.com//files/download/89813237/84f855.jpg"
            />

            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://www.socialmediaexaminer.com/wp-content/uploads/2019/04/youtube-channel-grow-how-to-1200.png"
            />

            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://cdn3.f-cdn.com//files/download/89813238/7fe657.jpg"
            />

            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://i.ytimg.com/vi/Mf0QB3U-DUw/maxresdefault.jpg"
            />

            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://cdn3.f-cdn.com//files/download/89813242/ffecb1.jpg"
            />


            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://2.bp.blogspot.com/-UNVlsj_oo0o/W1Hftr_P32I/AAAAAAAAAMc/1XSo_By4bvwy5oX9uFx-V03P3DR9Ei3vQCPcBGAYYCw/s1600/Screenshot%2B%252886%2529.png"
            />

            <VideoCard
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cumque!"
                views="2.4M Views"
                timestamp="3 days ago"
                channelImage="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
                channel="RN Khatri"
                image="https://i.ytimg.com/vi/3Cq1Je2ZVUs/maxresdefault.jpg"
            />
        </div>
    </div>
}

export default RecommendedVideos;