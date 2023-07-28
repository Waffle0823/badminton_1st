$(document).ready(function(){
    $('#btn_delete').click(function(){
        let email = $("#delete_email").val();

        delMembers(email);
    });

    getMembers();
});

function getMembers() {
    $.ajax({
        url: "/members", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        data: { name: "test" },  // HTTP 요청과 함께 서버로 보낼 데이터
        method: "GET",   // HTTP 요청 메소드(GET, POST 등)
        dataType: "json" // 서버에서 보내줄 데이터의 타입
    })
    // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .done(function(json) {
        console.log('result : ', json)

        new DataTable('#example', {
            columns: [
                { data: 'email' },
                { data: 'pw' },
                { data: 'address' },
                { data: 'name.' },
                { data: 'phone' },
                { data: 'seq' }
            ],
            data: json,
            "columnDefs": [ {
                "targets": 5,
                "render": function ( data, type, row, meta ) {
                    return `<span class="btn btn-primary-outline material-icons btn_delete" style="background-color:transparent; color:red;" data-bs-toggle="modal" data-bs-target="#myModal">
                    delete
                    </span>`;
                }
            }]
        });

        $('.btn_delete').click(function(){
            let email = $(this).closest("tr").children().eq(0).text();

            $("#delete_email").val(email)
        });
    })
    // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
    .fail(function(xhr, status, errorThrown) {
        console.log('error: ', errorThrown, status);
    })
    // 
    .always(function(xhr, status) {
        console.log('always message');
    });
}


function delMembers(email) {
    $.ajax({
        url: "/members", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
        data: { email: email },  // HTTP 요청과 함께 서버로 보낼 데이터
        method: "DELETE"   // HTTP 요청 메소드(GET, POST 등)
        // dataType: "json" // 서버에서 보내줄 데이터의 타입
    })
    // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .done(function(json) {
        document.location.reload();
    })
    // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
    .fail(function(xhr, status, errorThrown) {
        console.log('error: ', errorThrown, status);
    })
    // 
    .always(function(xhr, status) {
        console.log('always message');
    });
}
