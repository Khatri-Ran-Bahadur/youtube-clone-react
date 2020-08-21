import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
    return <div className="searchPage">
        <div class="searchPage__filter">
           <TuneOutlinedIcon/>
           <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow
            image="https://lh3.googleusercontent.com/-jgDosZGF7Wg/WjAFWOslkXI/AAAAAAAACt8/MtOYbEvmsdEdDom_hInepsiN6NfxhaWkQCEwYBhgLKtMDAL1Ocqznrm7LJaGm--6wsEkd-j9zGiMRmXzpcJls9lIzFlp4FOi3GVkpoYBAyeE9eHdHFv4nQ42B3wVR5Oh24-DQcrw90IjHkIWcZoFo69o9RduI90QSsI7qt2gKgM1NGZcgcc8Jq-AWrbD-Y4RrPTe24Qo2l_zScRFCyNcCFDj2rgdgFxcqy09WSvGo2Mjnz324JZSfPGqO8xjGs8H4V7T6uLpuf1otiJMSiwMOlzvccfZ2txHUfbQqtShaX1aUrxJH93DLB4cisk2aDxXilWPGKRQ7TgQqAnnLVGNmRg2HRYYQcV_wWzsAd6h60Deekk5xoRFgBoENhHGaqOYAOayL5udB0FySG8tCZhVAUT67pRqm1QBHnfmayDL0y5xCLnqadyz2b3LGCJA_9OYOQeLe25kGks_llCChtmWL8iP3v8TTpyGfxdrwZ6AqT6DWOhJGZJ9M-e4s8kVkesBmQZDPVGu7Xl_QFZZsCOXfxIpHJc9sc8ZBoLohlj5SlbNZ6Q6dHpv0uBG42TPWy-FDXj1x4m_9GmQYkL9cnM9d9Lh8eyresWPxXD4BfqZIsfq8JYmFtZ3qN-X7gL4I2z7JPw3rNxmDS2BC3lhT-KBWYdRWZzowyvj8-QU/w139-h140-p/1488772327865.png"
            channel="RN KHATRI"
            verified
            subs="1M"
            noOfVideos={382}
            description="You Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facilis iusto ab, quo harum molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, excepturi! can fiend awesome programmer rn"
        />
        <hr/>

        <VideoRow
            views="2.4M "
            subs="1M"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi delectus velit, distinctio eius officiis possimus consequatur quae error aliquam in."
            timestamp="45 seconds ago"
            channel="RN Khatri"
            title="Lets Build the youtube project using React Js"
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUVFRYVFRIVGBUVFRUVFRUWFhUXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zOjMtNygtLisBCgoKDg0OGhAQGy0lIB8tLS0tLS0rKy0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstNS0tLf/AABEIAJkBSgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcAAQj/xABOEAABAwIDAwgFBwcKBQUAAAABAgMRAAQSITEFQVEGEyJUYXGT0RUygZHSFEJSkqGxwRYjMzRElPAHNVNicnOEsrThJENFY4N0oqTC8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA0EQACAgADBQcCBQQDAAAAAAAAAQIRAxIhMUFRUpEEBRMVFmGhInEUMoHR8AaxweEjQpL/2gAMAwEAAhEDEQA/AB66tr9D23V2fDR5V3oe26uz4aPKvC8nlzfB9X6ihyPqYpS2sOeKeyK2j0PbdXZ8NHlUdtxm2YShXMWwClhBW6lCEJBSpUqVGXqx7avD7nm5KpJ/oRP+oMOUWsjX2ZlrfMwMXOTAmMMTGevbNetczHS52ctMEdutXxW0WAlRVZMiLXn0dFMKcwOLLR6AOaWyoKjMBWQiCftT5O06hpNowpbqTzYKECVgjInDkkJxrJ1hBgEwK18kxk0rXT/ZPn+Hyy6ma/mP+72ep/HCvVi3kwXTwMIrRW7mzK0t8xbc4bhbJRhRiATjOKInMIBjtptLzSm7habO3BaBcbCkphxgYwlchHRxFpyBnlhO+KfkmLva6fpxF59h8suq/Yzh7m4GHHO/Fhj2R7KS3hkYpjfET7Ca0dVwyl9LK7W0xKDJwJw84eeW4nEhBR0koCMStMsR3Zy+y7G3dZbcNsyMaErjAgxiAMTGdRPuXFhq2un+yvUGHsyPqZQksSZDkQIgomc5n7K9UbfdzvtwedbB6Hturs+GjyrvQ9t1dnw0eVT5XLmXQnz3D5Zf+jGbgtyObxRGeKNZ3RuiKara/Q9t1dnw0eVd6Hturs+GjyqH3RJ/9l0NI/1DhpVkfUxSura/Q9t1dnw0eVd6Hturs+GjypeTy5vgr1FDkfUxSura/Q9t1dnw0eVd6Hturs+Gjyo8nlzfAeoocj6mKV1bX6Hturs+GjyrvQ9t1dnw0eVHk8ub4D1FDkfUxSura/Q9t1dnw0eVd6Hturs+Gjyo8nlzfAeoocj6mKV1bX6Hturs+GjyrvQ9t1dnw0eVHk8ub4D1FDkfUxSura/Q9t1dnw0eVd6Hturs+Gjyo8nlzfAeoocj6mKV1bX6Hturs+GjyrvQ9t1dnw0eVHk8ub4D1FDkfUxSpnYKLdTq/lBR6g5sOKKGyrKcSgRoNBOdal6Hturs+Gjyrjse26uz4aPKtsDu2WFNStOtzRz9p77hjYbgotXvT1Mfvw2Fuhokt4+gTrh6Ua5++pnlC1ZBhJZwYpSElKypa04TjLqfm5x7a0f0PbdXa8NHlXehrbq7Pho8q1j2JpTX0/V7bPsc8+9Yylhv6vo919Wi29DMNgoti658owET0QtZbTEnEcQIz0jXu4RrgbxrCSea54AH53NyvPvw1sJ2PbdXa8NHlXeh7bq7Xho8qzl3dJxUbWl61ts3j31BTcqlqlpeirgZKi3tsMl9U5AgJOsSYkZjtyoZkIlOMkJ6Uka78OXfH+2tbH6Hturs+GjyrvQ9v/QNeGjyqX3Y+K6P9yl37FXak791p9tDJHGLYFP51RBzVA9UEEjdrIGXbQ9whAUsIViSBkoiJ6Sa2P0PbdXZ8NHlXeh7b+ga8NHlSfdbe9dH+4R79insk/u1+xildW1+h7bq7Pho8q70PbdXZ8NHlWfk8ub4N/UUOR9TFK6tr9D23V2fDR5V3oe26uz4aPKjyeXN8B6ihyPqHV1ZEztG4Xn8ofHc64PxoZdxeZkXT/iufFXr+Mj5LMbNQ91aJcw4hOBWIDcThUnMbxCjWRN7Wuh+0Pk9ri/OpBG1nynN90HscX51Xi1sCy+vcnGVNKaVjKVoQ2TiOIJbxYIVrIxETv3znJN9spt0yqZCcIIMFPSSsKTwUFJBBrHdsbdukZpun+4OuedQ9/tq8UgLF5cpKDiKQ+8nGneJCuMfbWqxpOnZObWkjezstERKhDinQQcwteKT/wC80MzyctkApbbDYU0WVYAE4kEAdKB0lCDBOmJXGsCZ5S35Qqbq4xA5HnnujmnIgKggjFrxpr8qr8Ezev8AjPAezpVanLcwc1wPopzZLZWF54hzZCgcxzWOI7w4tJ4hRFE2dsltCW0zhQkJE5mAIE187nlltPAjFcOBK5KV4lhSggwelNSFr/KBdN547hfYXkKHtKkHKpcpNU2VmSZv1dXzzacpb59ayl66BMOEIcd5sI1UQnEcAkbsqW9ty73Xlz4zvxVLJliZdx9B11fO/p+8H7Xc+M78VN/lFdz+uXPju/FQR4y4H0ZXV86/lFd9bufGd+KuO37zrlz4zvxUrDxlwPoqotWz3oyuFTCYVG8QTlMEGOE9uZn59f5RXo/bbrx3vipscpb3rt1473xVVD8ZcD6QsLdSAQpwrJMyfupV40tQGBeCDJMTOURr2/dXzeOUt71268d74qcRyiveuXXjvfFSDxlwPoFFg8P+eTkRmDvy+lqNZ467qMZYKfnqI6WRzBlUjMychlrXzojlHe9cufHd+KiLflBeT+t3J/8AM78VJsPG9j6FuUFSVJCsJIIChqCd4oEbPd159Uyo6GOkOiCMWgMZd/GsTG3LwnK7uPGd+KjWds3Y1uX/ABXPOoeIkHjLgbD8hckfnlQFAxnJSJ6JziMxnGdF2jSkoCVKxET0jqczE58KxJzlFckwLh4dzrnnTd1t27Sj9afn+9c+Kmpj8X2NrvLZxR6LmEREQfpAkyCDoAPaeNDejns/+JV86MtJ0Gu6awZvlBe77y58Z34qnbPbNyU53T5P9658VOUqIeOluNhcsnCSQ+oAkmImATkBwjKvbS0dT6zpVkQZHECCmSQIg8dayNe2bpI/WH/Ec86jrvlJdaC5fHc64P8A7UKVlLGRvSBAAJJgamJPaYAFCP2jhUVJeUmSDhiQABEQfafdwrELblHcgdK6f9rrnxUZ+Ub8frL/AIrnnRm9h+KjXm7B0avk5pO+ICpIzVvGWu6j20wM1E5kyY3nIZAZDSsIe29dD9qf8V34qTbbfuTrdXHjO/FRYnjVuNyu7daikpcKAJkDOZIPdOR1B1NM29k4FAqeUQJyGQJOhVJPu7AeM5Adv3A/aXz/AOVz4q5zlM/p8oeH/kc86nxPYPGXA21CYAEkwNTEntMACmrRkpBBVizyJmdAN5PCfbWFO8orrQXT/iufFRB5R3OCPlL08edcn3zTzB4y4G6V1YAxt26Jzu7jxnfip9zbl0P2q48Z34qeYXjrgbxXVjVhtm4Kc7h6e11zzoZW2Luf1p7xV+dGYPHXAJaJOScqc+TqQMzNJtrUpMk09evEJNcV2aDWGJNQt7cKzKTTStqKJPCmpBz47q1jGtplLEW4DbJXimi02RW0UJIxERn9HU/bXYY3UgrUDIMVbkRh4uSVsbvdn5haDGNKSRwOEAxx0oRGzVE8CejjXGFI1JPdU5arGFIO7L7aa2jtRIlrmyrISYJzOgAGppqUth6EVFqyb2ns+1uLFpplxBcZIU0JgrAHTSDvJTn3gVWLDZBKx0CeyM/KpDZa0ICV8y4rDBWCySEmfWBAkf7b6tey9otXCCpCMMKKSD75HZUuUoo1cIt20QrmyuZleGApsOEbkJaV0QSMiT0z7RwqmlyrZy320oYrVEBMIKzvOqsPYMxVbstmKcjPKtMOLepwdqxE6itwO4rKgl3EGp3aGw1IEgyN+VV11rOtqp6nMtVYWHJri4aYQYp6RSYxKhNIIpZQpWQqTa2G7gxRumjWhEUURTyGspohLe4jOkMqzKTUOQkNNUVbmhX04TTzTlJlEihWYoxx7KgmUkia9Wqayq2FCkJzmiQoKEHWgEPEU9buwZqqZQ5a2bZX0jqeNXGwsWWwDE+yqowlLiwoASKsCdrhICSBlW1abjPKntTLTZ2Tbojm8u6oPlNybYTnGE8KkdicpFN5FslPZSOUu103CcIQRGpORqJSfsarDjl0TM0v7YJORmhC6ZqcvLZE61EXCQNKaZnqnqO270+tRKm0xIoS3t8Q1rkLAVE0mi2h9LnSivX0EnhTloE4qTdv9KpfsTWgyhjOJpd1blJAmmmcSlZbq5wqKs91PWwewecQABS2UYsqfYtZHGnrdKUnOlmMwNSloyoY85xoy9uBiprn6pMZYLi5KRM0K7tPnEFO+kXSVLVlpTLlhh0rlSW83lJ7gNxnCMqS2uKdVbrnfTam41Faow2njV3JiKfHbQZX2UhC1YvwptWFkmlYwmNxzppCQokFQE0u3aOFRIIBIicpgZ/eKDvbMKGRIPZRoelhXkTJ3Z+zkg/rKz/VJ6NTNokpxmRoVZb8IJ/CqPszZa1rGJwhM54davtpaJCSlG9CgJzMlJFS6s6LbRm7pLrpWs5qOI+2rbsVpCUyM6j7m12dbOqZfvFc4iAtIt3CASkKiQYOShUlbcodlITAul/u7tdcU6PIaleqfwS6nEKbKAnMg92dZxtmz5pZG/7KvTfKrZY0uV/u7lQG27rZTyir5a4k/wDpnT+NKnZVabH8FVZzNFLaSBUhZubLSZN+s/4R4fjXj7mzFH9fXHD5I/51O1jyMRsO3xuAA760iyswEFJIJjsqn7Jv9ksdI3S1dvyZ7zqfZ5cbLnK4X+7PVsstbTJxxc2kf7FOv7YoeUCcpJA7JoRGArirbta82W/0hcLSePMOedVhfo1K8toLBBzBtHj9xrnlHXQ0UJb0D3wEgUM8nDRl05s1Rn0kR/hHvipKzs0/9SP7m/8AFRGLSHklwHdm3E5E148/hURxpDC9nJ/6kf3R/wCKvXF7OP8A1JX7m/8AFSya2GSXAcbk1K21kSndQNvebOAj0go9otH/ADopva+zwI9IL/dHvOqqJXhyomeTFoEKJWRrUlcbPbU4FhQEbpqtW+17Dr6z/hXh+NLb21s/FHy9cnd8le86TUL2MqOHiR3o07k+GSYOE5ZVL3mzWcKjhAyNZONp2QzF84O0W7vnTrfKO1I/nB0jtt3vuJqXCHA0jnS1ohtt7OdDqyEkicoqv3LLg1SfdVvPKnZ++9Uf8K950nbSChxSIxpwoUlYBTiS42lwdEzGSwPZVppIxeDK9pVtnvmCDNCLegnXXWpi2alZyoi8s0KSQBnSc0mTtRGbHupUR2UcT0jNAWOzVJXNP3KiFGiVPYS9gfbrCJy1rxCCok8aYSTgxFOXGmre6NRQakkm4LWtRl7fyqaMcuErTCtahtpWpGlXhxW8keN4DrRYfRxqvLSRTeOtsiCjRE2a9yqfTaODMmaeXZH6Rp4MHjXH9J0LDQ1bgnUCn0bGW8PzbRUZ1Ay9p0FXLYHJNCQlb0qURPN6JHDFvJ7NKtSUgCAIA0A0FUsK9S1FUZjZ/wAmrq1AvOJbT9FHTWfaYA+2pi/5MM2TWNgKxYkhbijiUUwoAcEjEU6ATlV2Jpq5ZS4hSFCQQQR31rl00BRindGN7ZdKlSST2mohYmrttnYnNqIOY+aeI86hVbISrfFczbWjO1JNaEfshCQqrLs9ZBkVFM7KLZzMirFaJSEiBJOQG8k6AVL1ZpsRmnL61S5tK7xDRaMwYMltE/hVbf2R9FXsV5irfy4RG0Lnjzgnv5tA/CoSu1HCQ7VitOonuzoK8QSZ4VZaZuLcLGeu40qAq7Azp0pJIo4EIVkBiSZAIkSMxI3iteb5P2a3n3lNtpa2i0w3ZdFIDbr9utwlAjokKaTEfSpCSMkuU9AU3ZJE1qex7FpN3YWrjLeJvZ7jz2NCVDnnkKchwEHEUYREzE5VGcn1oevFhS7W4SmwfUFsMBlsKAkSgoTKxrMbxnRuGVZI6Psqr3SFY1HtNaRyJQnmbu5Uyl5dswlxplYxIKlEgrUj5wQBMdvcac5L7Qb2hdFx+2t1m3tX3ktNNhCX1t4MCHEiccYtO6gGZXzZpWAxpWm3l23f7MublxhhDtu4wlp5hsNBfPKwKaMHpYQQrske218peT1n8qTchpAYsUrF4hKQElTDKLhoYQIJXzoSeMRnTsVGCoSaMYtMWlbGdm27d9tchNu2G2WHG1OtJcaZxpQrEG8JyzOgrPNtOpU84oONL0AWygNNqhIEpbCU4eGgzBosKIMW5TXimt9WrbbICHiQ3hGBLWBIxpcISTiIGQiTnxpxuybUtiEpxIS0XEwIWhafWI3kK1767PwUs2VP+W1/i/scf42OVSr+Un/mvuQi7UNBkzPPMB4yPVJeeawjiIaBntqPcV0wRuqb5Qoj5LHVI/8AmXlQ3NZzXFWp25rRIKuDFOWCuh7TQMnSnmVECKQWgVYEn21te1C2nmioassT4LdY2bbfWy7f2Ot1ppSf6Jj7GUU3KiZJMh9qNNnNA1qOftiMzU8zaqCAkpEg1G7Zs3csIrHEdyJUIxwyPaaKyY3CoQMOLfUgJKiDuzqw7Lt3UkyNRStnFTLq1FE4vZ3Z1eHwFOK0Ybt1hLNkAUwopjPiap1m2SCaufKm7Xcs4cMZpPHThVcsLVSQQU1S0RnJfURjRM+2rTsTYXOgKcMJH20HYWCSqSKstmypAO8bq58fFpUjJ7BL/Ju1UCI7BUA5yLzMREmKs7ralGUj2U+En6VckcXEjsYswIXKn+Smzsa+cUOijMdqt3u191V1u2UogDUmAK0WxtQyyltJkgSTxOpPv+yuns2Fmle5HVOdIKtnsyM5SZz3pPDuohCukR2SKhbt0oUlxPs4Hik/dR9rdJWW1JOSgfZGoPaCI9lei0RGWwNIkV4Un+ONKOWdJS5JqDR1vA7y0S8nCoZ8NDPEHce2qlf7HW2TlKfpRmP7Q3d+lXRwT3jQ142ufWz7aU8NSQYWM4OigotlrUEpSVE7h/GVW3YWww101wV7huR3cT2/wTxzbfqpAkyQkAT3xRDS5E1EcHLqzaWPm0RgfL3+cbr+8H+RNQNT3L3+cbr+8H+RFQBFWSdXUphBXkIySpRkgABCSpWZ7Ek0W9sp5BSFpwlbnNJBKRK5AjWAJIzOWdAELtC3npj2/gadXyguii2bLpwWigthMJ6CgQUmYlURlM5ZVI3my30g4kAAIU4qVJyQlQSonPiQI1zqN9BPkuYUYg2tSFQpOSkDEoDPOBwqJRe0Vhq+U90Lk3nODn1CCsoQQQUBEYCMMYQBpXtrypuUvB5Km0rCFNgoZYSkoXGIFCUBKpjUigmdkPLUpASMSCgK6SQJcSVIgkwZAOYy0rnNkPIBUUZAtpJkZF1OJA90d0jiKVMdolzykuQ4LhDgbdSnAFNobbGGSYUhKcKtd4Og4Coq/wCVd64+2+p8h1mQ0pCW28GL1oSlIBnfIM0v0ZcFfNJRK8GPCFJ9UKwmDMEg5QNIPA0K7sR8ZqRhBxnEVJAhHOYs5/7Kz3QdFCVqDHNtcrL26CA+9iShWNKAhtCMf0ilCQFHM5mdTxNM33KO6dFwHHSRdlCrgAJAcLUYNB0YgerExnNevcnblIkt5Q4fWSf0SglYgE5gkZds6Z0i32DcLw4EA4w2pPSSJDoJREngCewCjUQW3yxvA649ziCt5tDTpU00pK0N5IBQpJTlxio6+2kp5ZccCcSoBwIQ2nIQIQgBIyHCvW9kukqEJBQtTasS0phaVttqEkxkp5sTp0uw05bbCfWFFLchC1trJIGFbaQpYIOeh4ZweBosYhV+4rGcX6QALECCEwE5RkRGopbd86FpWFdJKQgGB6oEAERBr1OyXQE5J6ZaCRiSSefBU1odFBJNO3myHmkqWtEJTqZByxYJyP0oHtHGr8bE22/5qR4UK2If24CU2hO+zH+ru6hnUHdU6nZN06Upw4+bJt0gKbOBSSpxTZIOoLiiZ4nhTSNgXBCVBvJYQU5pzxpxJymRlMzphVMRWdsuiBAXTySqpO72ctpKStMBeLCZBnArCruzplCRhp5mFADjqwDWt7X2o8lYQn1QzbxrvtmiftJrKlEZ1sG2W0nBGvMsT4Df4UpTpWJogzth/splW1nyd1HqZmmgwRWTxUZjbW0nfo/ZRTL6lHpCKVbqicqTbPYict9NSsdh9qwknNVEP8zpAqP2iebRIoK1uwR0qUpPcRJMmEpa0opCBGRqJZLZ30+5dpTkFVzSk2zNxdjl++pAB9lMAznnnS3bhLiYOcUyNopGUDLKlS4Cy6k3s9uTPsH4n3ffRbm2ltKAAxIGUHd2g0htPNtgb4++ox/pSN9e/wBmwVDDUTHFm3K0WW226w7iTig/OQeP0hP/AOHspxm6DTyEgghWJaRu0hUH2g++qDeM4kyMlJ0V58RUbs3aRF2zziyA2pZVKiUgFtYkcQZFW8NBGbZsyrhSjmYHAU8hzMGq2xyltCkEOz3JV9mVe/lbaCM1nuSPOocNNhpmLKpzpCqzy92re27SDZMl1xaykgIU5hEYgopTuyI3ZkdxW7yxt8oSs/VH402rlYFZpZOXFUGPYKSw5cAzob2TeXqlL55KgMLZnBh/OEqKwmUCUpBQmTqUqMJBFWLZ7jskL03GIqoXXK50GEsJAMa4lHPIaRvyp1vlTdFOTScjhJCFQFaQSTrmMqp4baDxFZn/AC9/nC5/vB/kRUBNSH8oNy4NpXIgZrT3/o0T9tV/5crhXNlOzMhd5dFAy3mPZGY7iJpJvVriVK1xxJyOoV39tR94+VLCTGRxeyNDRDO/tqkiGyQeuVlOa1RBEFRiDqInSg33llPrqzJxDEYVMySJzOZ140RqmgucGc76UkqBbT1q7cCirnF4jqrErEYECTMnIkdxp1dysjNajlEFROQiBr/VT9UcKCmlFVYJmlCzcuYsWNcgQFYlSBwBnIa0nnF/SV3SqNMP+XLuyrwHo6/O/CnglGf5xXZmTv7uEe/szajZLlQ2X3fpubx6yvnRiGu+BPGBSEuLGilicMwVCcPqzxjdwp44Ppq10k5CTnMZ5Rl31yAiBLigcp1yyz3Z508nv8oWf+UNpWsZ4lazMnWQZnjKUmeKRwrkvuAkhxYkkkhShJOpMHMnjSyrNQSSRhyn2a0xUNFJ2LLy8pWrKCMzlhmIzyiTHeaWq4cIIK1kKjECpRxQSRizzzJOe802DXuKgY6Llw/8xfD1lcI48IFKTdu/0i/rK8+we6kNqrgRNA7FruFq9ZSla6knXXXjScRiKfZArnFCKQ7AljI1rm10GRn/AMm3/wBO1WRuHI+2ta2qrppH/Zt/9O1WeLWUiTALdRGppT72WRpRb6M0MpNc+0hi7ZZMyaZEg5UXbt5GkYaqxCr64K0AUG0DEUYW8q5DYoUgbBubNII6VSKkSKZYbE50ZtCWKs1YVd+4U6ppudPvpoN9LEKWSrhU3lMWyxuvhehB+w+6hFyDvH+9CpNVhF3chxWB9YTiMAwoASdAoGPZXq4Pbk/zIt9kcn9LLPegATx1zFULarh58FO6cuIMAj7Z9lWW4u3MBKiknjhj7jQIsvzSF4RjUcRPYQSB91bfiYSpLeS+zzw9ZCkqgCRnFSllfspSnEgEpOYwpMmVSSTqIUnI706Z1APFU9IQa8Cv4it/Yx9y82N824lQQyo9NKlYEIkJIR0cWIRmlzQQZ0EwDy84srTgLXOIBKCSEyFgEiBvECDGZqi2IemUYkxnMxpOf2n31NNXyj85RyhRkyeM9k01ATkTCnHUgN4WxgRiClKnEGnAtIkZesT2ZmmgVrQ4hS2Ri6SjKvWzkgTAJ5oE5fP9gg7k55e6a8tFdKDv/jSm8MnOV7+UUk7QuoOYcGY3y2g1WGzlV+5Wclb52+uHWrZS21qSUrCm4UObQJEqnUGolXITaO6zX72/irhPRKU/689yT+FFNOe37KnLjkHtLqa+PrNcf7dc1yG2l1Nf1mfjrNzaNIwT2kM6+qI0HZ50PVlc5DbSj9TX9Zr464chdpR+pr+s18dZttjaorM101YTyF2n1Nf1mfjrvyF2n1Nf1mfjpCIBK92Xtr3H2D7anvyG2n1Nf1mfjrvyG2n1Nf1mfjotipEDznYPt869C+wfb51O/kNtPqbn1mfjr0chdpdTX9Zn46dsKRBBzsFeVP8A5DbS6mv6zXx17+Q20upr+s18dTqMr1e1YPyG2l1Nf1mvjrxXIbafU1/Wa+OgCBRTmGptHIfaXU3PrM/HTo5EbS6mv6zXx1QrIVtOVMumrH+RW0h+yL+s18dMOcidpn9jc+sz8dKh2VpxWR7q1ja7kOD+5tv9M1VHVyE2nB/4Nz6zPx1fNtMEOwoQQ0wkjgU27QIy7QayxfykvYBh8xXk16kAV4oVzkimlZGmSs0tsxSVKoELbd6JptK69apKEiaYMK5yE0yltRExTjzZGlPNryqU+BNgqUK7qYLx7alm41psuN9nuouzFzdnqn4BqEZyOdSt6ncN9AvMGK2gtD1MGOljN2cQCR84ge8xUtesy0QnIgSPZUTao/Otg/Sn3JJqwLG6hyyyRGNroR1m8haYWlOIZkRPtFeC7YTo2J7qRc2xQQpHrJOXAjgaOtm7e4TiPRI9caFJ/jfX0EHa1PGmkiIvNouOdBtMDgB+NLtdn3JiFJHZP4VNM2jCB0XB9hP30pd4hHqhSj2A69tXRN8BFvs0wMZz3xl7qYunGUEQJUDII+2eNJdduHeCB3Z0bY7PcGRWFDSMIB980MEhiz2g6T0GsXYKsyto9AQkyUyR9HsJoRho5hJy0Ktw7E8TUlbWQgDdrB1Pf2VjI0iUja7frSMygk95BMe6Ki7RcRU/ynt8C1x85JUO/MK9sgn21B2yJCT768ef5pXxPW7JsLAhnEyrLTpe7X7J91ItGykEgYhEgDjROznAE+ymrZOGCCdYrlxR9qWqYNcISBijNW6NKDCJOlS10jEkZQQd+8a5UOynCTWd6HMnoDptpByGVDFPZUm8kyY4e+ggnOlFsUXY2EdgpZTA0FEFECmXTTsoQI4U83HAU0hM08hGYmmB6ADuFJeSOAp91mDlXmDPOlYrBm2xwpRyNEBumngBQmIRjk0hSBOgpSm94pM1VjH22xwpDh3U41pQzhzoQHizTgVlQ6jXoVVNDHd1NqTSk1xpIQltNPttA5GksJzmlqWQZFDCSFvZCKZbWYiibh0LT20O2iNaUSVsPXWSSCDXhb7afUo0mKHJmeXUbfV0+6KdWJFDr/SHv/CiDpXQtiPXgvpQHbol9P8AVCj9kfjU2huah9nfpz/YP+YVPIrOWuIkcmM9WB3LetRSmVJIdbMKGo49hHA1Mv7/AON5oK39ZXf+FfRRPJYtk2z4z/NObxoJ7KMt9hrSZQ6CO3hVYvfWPfVl2H+hT3n7zWliaDRZBObjg7hFNt7QaVKUBSuAQJnvUcqi9uer76keTvq+ypYIkWEvGICGx3lSvKpyzawdqvu7+3spix/j30a3qf7XlWcjRFQ5bt9JOWqV57tap1krKtF5Z/o0f2j/AJFVnNtXl4y/5Jfoel2R6E7Yu0UwTJA41HWdSTGqv43GuHFNu1bENMuJAJMkYtd4pLhlcHTdSGP0av7Qr131kdwrHezjCm0GIIn+t2UKtoA1Jt7/AGUC7vpIIKxhacQyoTBRbOoppz1qtFDaBFFMIxUPRFjrTALSiRG8U28N1Or/AEiabvfxqRUNhMEToaFuVZ0ar1KjnaFtEhSV7qSoUpH4UsVWwpo8SIFMLTRp9WmFesKaFF2CqQRrSgjfRN/qO6mRpTbB6HKdjSkKVSFVwpgkPtGnUImmmaMY31LdA2JZaGtLcSDnSBpT7fq0m9TO9RvBlSQyrhTx0o5OlZy1ZEtWf//Z"
            />
         <VideoRow
            views="2.4M "
            subs="1M"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi delectus velit, distinctio eius officiis possimus consequatur quae error aliquam in."
            timestamp="45 seconds ago"
            channel="RN Khatri"
            title="E-Commerce Project using CodeIgnitor and ajax beautiful"
            image="https://cdn3.f-cdn.com//files/download/89813237/84f855.jpg"
            />
         <VideoRow
            views="2.4M "
            subs="1M"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi delectus velit, distinctio eius officiis possimus consequatur quae error aliquam in."
            timestamp="45 seconds ago"
            channel="RN Khatri"
            title="Lets Build the youtube project using React Js"
            image="https://cdn3.f-cdn.com//files/download/89813238/7fe657.jpg"
           />

         <VideoRow
            views="2.4M "
            subs="1M"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi delectus velit, distinctio eius officiis possimus consequatur quae error aliquam in."
            timestamp="45 seconds ago"
            channel="RN Khatri"
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, adipisci."
            image="https://i.ytimg.com/vi/Mf0QB3U-DUw/maxresdefault.jpg"
        />

         <VideoRow
            views="2.4M "
            subs="1M"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi delectus velit, distinctio eius officiis possimus consequatur quae error aliquam in."
            timestamp="45 seconds ago"
            channel="RN Khatri"
            title="Spring Boot Project using mysql database and angular js 2 "
            image="https://cdn3.f-cdn.com//files/download/89813242/ffecb1.jpg"
        />

    </div>
}

export default SearchPage;