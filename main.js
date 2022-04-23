console.log('AJAX demo')

let n=1;
getPage.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n+=1;
        }
    };
    request.send();
};
getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
    if(request.readyState=== 4 && request.status ===200){
        const object = JSON.parse(request.response)
        myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{ 
        if(request.readyState=== 4 && request.status ===200){
        console.log(request.responseXML)    //responseXML支持自动变成DOM对象
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
        }
    }
    request.send()
}
getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        //创建div
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //插入到身体内
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}
getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}
getCSS.onclick=()=>{
const request = new XMLHttpRequest()
request.open('GET','/style.css');
request.onreadystatechange=()=>{
    if(request.readyState===4){     //判断下载完成
        if(request.status>=200 && request.status < 300){    
            /*判断下载的状态码，因为路径错误导致的下载失败，readystatus也会变为4，
            但是下载的界面是错误的404界面，而2XX的状态码都是加载成功*/
            console.log('download success')
            const style = document.createElement("style")
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
        else{
            alert('加载CSS失败')
        }
    }
}
request.onerror=()=>{
    console.log('error')
}
request.send()}