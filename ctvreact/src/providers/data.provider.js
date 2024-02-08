export async function getCryptoData(pageNo = 1, rowsValue=100) {
    const response = await fetch(`http://127.0.0.1:8000?page=${pageNo}&show_rows=${rowsValue}`);
    return await response.json();
}