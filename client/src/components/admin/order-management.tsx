import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { queryClient } from "@/lib/queryClient";
import { adminApiRequest, adminQueryFn } from "@/lib/admin-api";
import { useToast } from "@/hooks/use-toast";
import type { Order } from "@shared/schema";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

export function OrderManagement() {
  const { toast } = useToast();

  const { data: orders, isLoading } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
    queryFn: adminQueryFn,
  });

  const updateOrderStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return await adminApiRequest("PUT", `/api/orders/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      toast({ title: "Order status updated" });
    },
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      pending: "secondary",
      processing: "default",
      completed: "default",
      cancelled: "destructive",
    };

    return (
      <Badge variant={variants[status] || "default"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Orders</h2>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : orders && orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => {
              const items = JSON.parse(order.items);
              return (
                <Card key={order.id} className="hover-elevate" data-testid={`card-order-${order.id}`}>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-bold text-lg">Order #{order.id.slice(0, 8)}</h3>
                          {getStatusBadge(order.status)}
                        </div>
                        <div className="text-sm space-y-1">
                          <p>
                            <span className="font-medium">Customer:</span>{" "}
                            {order.customerName}
                          </p>
                          <p>
                            <span className="font-medium">Phone:</span>{" "}
                            {order.customerPhone}
                          </p>
                          {order.customerEmail && (
                            <p>
                              <span className="font-medium">Email:</span>{" "}
                              {order.customerEmail}
                            </p>
                          )}
                          <p>
                            <span className="font-medium">Address:</span>{" "}
                            {order.address}, {order.city}
                          </p>
                          <p>
                            <span className="font-medium">Payment:</span>{" "}
                            {order.paymentMethod.toUpperCase()}
                          </p>
                          <p>
                            <span className="font-medium">Date:</span>{" "}
                            {format(new Date(order.createdAt), "PPp")}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Items:</h4>
                        <div className="space-y-2 text-sm">
                          {items.map((item: any, index: number) => (
                            <div
                              key={index}
                              className="flex justify-between p-2 bg-muted/50 rounded"
                            >
                              <span>
                                {item.name} × {item.quantity}
                              </span>
                              <span className="font-medium">
                                Rs. {(Number(item.price) * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="font-bold">Total:</span>
                          <span className="font-bold text-lg" data-testid={`text-order-total-${order.id}`}>
                            Rs. {Number(order.total).toLocaleString()}
                          </span>
                        </div>

                        <div className="pt-2">
                          <Select
                            value={order.status}
                            onValueChange={(status) =>
                              updateOrderStatusMutation.mutate({
                                id: order.id,
                                status,
                              })
                            }
                          >
                            <SelectTrigger data-testid={`select-status-${order.id}`}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="processing">Processing</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-orders">No orders yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
