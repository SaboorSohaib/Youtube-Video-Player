let api_key = "AIzaSyCbq5lzL-gmCdW_It1Cie2Vr1oNoMVPNII";
let video_http = "https://www.googleapis.com/youtube/v3/videos";

fetch(video_http + new URLSearchParams (
    {
        key: api_key,
        part: 'snippet',
        chart:'mostPopular',
        maxResult:1,
        regionCode:'IN'
    }
))

.then(res => res.json())
.then(data => {
    console.log(data);
})