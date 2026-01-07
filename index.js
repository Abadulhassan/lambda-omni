exports.handler = async (event) => {
  console.log("Incoming event:", JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User created successfully it is deployed by Muhammad Abad",
      input: event
    })
  };
};
