function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px"
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #e5e7eb",
    borderTop: "5px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
}

export default Loader