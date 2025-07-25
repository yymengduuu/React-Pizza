// 获取用户订单
export async function fetchUserOrders(userId) {
  const res = await fetch(`/api/orders/user/${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }

  return await res.json();
}

// 取消订单
export async function cancelOrder(orderId) {
  const res = await fetch(`/api/orders/cancel/${orderId}`, {
    method: 'PATCH',
  });

  if (!res.ok) {
    throw new Error('Failed to cancel order');
  }

  return await res.json();
}
