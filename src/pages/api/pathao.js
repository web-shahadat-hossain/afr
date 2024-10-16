import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      access_token,
      store_id,
      recipient_name,
      recipient_phone,
      recipient_address,
      recipient_city,
      recipient_zone,
      delivery_type,
      item_type,
      item_quantity,
      item_weight,
      amount_to_collect,
      merchant_order_id,
      recipient_area,
      special_instruction,
      item_description,
    } = req.body;

    try {
      const response = await axios.post(
        "https://courier-api-sandbox.pathao.com/aladdin/api/v1/orders", // Use production URL in live environment
        {
          store_id,
          merchant_order_id, // optional
          recipient_name,
          recipient_phone,
          recipient_address,
          recipient_city,
          recipient_zone,
          recipient_area, // optional
          delivery_type,
          item_type,
          special_instruction, // optional
          item_quantity,
          item_weight,
          amount_to_collect,
          item_description, // optional
        },
        {
          headers: {
            Authorization: `Bearer eHfF3NX8zWJNSpy9dIJ5IMxEYSuSGtfw94CyVJ5j`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      // Return success response
      res.status(200).json(response.data);
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      res
        .status(error.response?.status || 500)
        .json({ message: "Failed to create order" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
